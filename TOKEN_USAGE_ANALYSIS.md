# Token Usage Analysis - app.py

## Problem Summary
The app consumed **5.1M tokens in input and 181K tokens out** over Apr 07-08, with massive spikes on Apr 08. This appears to be automated/scripted usage rather than human interaction.

## Root Causes Identified

### 1. **Missing Caching for Expensive Claude Operations**
- **`_extract_themes()` (line 743)**: Calls `claude-sonnet-4-6` with 2000 max_tokens to analyze all recommendations
  - Called every time `/themes` endpoint is hit and base cache misses
  - No persistent caching mechanism - only stores in memory during runtime
  - Cost: ~500-1000 tokens per call
  
- **`_generate_theme_questions()` (line 896)**: Calls `claude-sonnet-4-6` with 1500 max_tokens for each theme
  - Called by `/theme-questions` endpoint
  - No caching at all - regenerates for every request
  - Cost: ~700-1000 tokens per theme

- **`_rerank_themes_for_query()` (line 812)**: Calls `claude-haiku-4-5-20251001` to rerank themes
  - Called when `/themes` endpoint receives a query parameter
  - No caching mechanism
  - Cost: ~200-400 tokens per call

### 2. **No Rate Limiting on Expensive Endpoints**
- `/themes` - Can be called repeatedly, triggers `_extract_themes()` (expensive)
- `/theme-questions` - No rate limiting, can be called repeatedly for same theme
- `/ask` - Streams responses but no per-user limits

### 3. **Potential Repeated Execution Patterns**
Possible causes of the spike:
- Automated testing loop calling `/themes` repeatedly
- `/loop` command (from skills) running repeatedly every 10 minutes
- Crawling/benchmarking all themes (50 themes × multiple calls = high volume)
- Rerunning theme extraction on cache refresh

## Token Consumption Breakdown

| Operation | Model | Max Tokens | Estimated Cost | Calls |
|-----------|-------|-----------|-----------------|-------|
| Extract themes | sonnet-4-6 | 2000 | ~1000 tokens/call | ~500-1000x |
| Generate theme questions | sonnet-4-6 | 1500 | ~700 tokens/call | ~50 themes × multiple |
| Rerank themes for query | haiku-4-5 | 400 | ~200 tokens/call | ~100-500x |
| Stream responses (/ask) | sonnet/haiku | 1000 | ~400 tokens/call | unknown |

**Total estimate: 500-1500 calls × 500-1000 avg tokens = 250K-1.5M tokens** (matches observed usage)

## Issues with Current Safeguards

1. **RateLimiter class (line 162)** - Exists but:
   - Only 10 requests per 60 seconds - too generous for expensive ops
   - Uses in-memory tracking - resets on restart
   - Not applied to all endpoints (missing from `/themes`)

2. **EmbeddingCache (line 190)** - Works but:
   - Only caches embeddings, not results
   - 1-hour TTL - short for global data

3. **SearchResultCache (line 219)** - Works but:
   - Only caches vector search results, not Claude outputs
   - 30-minute TTL

4. **ThemeCache (line 247)** - Works but:
   - Only in-memory, lost on restart
   - May not be applied to all expensive operations

## Recommended Fixes

### Immediate (High Impact)
1. Add persistent caching for `_extract_themes()` results
2. Add persistent caching for `_generate_theme_questions()` results
3. Add caching for `_rerank_themes_for_query()` results
4. Apply rate limiting to `/themes` and `/theme-questions`
5. Investigate what triggered the spike (check logs, git history)

### Short-term (Medium Impact)
1. Increase rate limiting from 10 to 5 requests/60s for expensive ops
2. Add request validation to prevent empty/spam requests
3. Add cost tracking and warning thresholds
4. Move cache to persistent storage (Redis or SQLite)

### Long-term (Architectural)
1. Implement request signing/authentication
2. Add per-user token budgets
3. Create background job for theme extraction (only run periodically)
4. Implement LRU cache with size limits
5. Add monitoring/alerting for token usage
