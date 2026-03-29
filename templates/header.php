<?php
/**
 * Page Header Template
 * Used by tool pages to provide consistent header styling
 */
?>
<header class="header">
  <div>
    <?php if (isset($headerTitle)): ?>
      <h1><?php echo htmlspecialchars($headerTitle, ENT_QUOTES, 'UTF-8'); ?></h1>
    <?php endif; ?>
    <?php if (isset($headerSubtitle)): ?>
      <p class="muted"><?php echo htmlspecialchars($headerSubtitle, ENT_QUOTES, 'UTF-8'); ?></p>
    <?php endif; ?>
  </div>
  <div class="header-actions">
    <a class="btn btn-outline" href="index.php">Home</a>
    <?php
      $currentLang = isset($_SERVER['PHP_SELF']) && strpos($_SERVER['PHP_SELF'], '_en.php') ? 'en' : 'de';
      $altLang = $currentLang === 'en' ? 'de' : 'en';
      $altSuffix = $altLang === 'en' ? '_en.php' : '.php';
      $currentPage = basename($_SERVER['PHP_SELF'], '.php');
      $currentPageBase = str_replace('_en', '', $currentPage);
      $altPagePath = $currentPageBase . ($altLang === 'en' ? '_en.php' : '.php');
      $altLabel = $altLang === 'en' ? 'English' : 'Deutsch';
    ?>
    <a class="btn btn-outline" href="<?php echo htmlspecialchars($altPagePath, ENT_QUOTES, 'UTF-8'); ?>" lang="<?php echo htmlspecialchars($altLang, ENT_QUOTES, 'UTF-8'); ?>"><?php echo htmlspecialchars($altLabel, ENT_QUOTES, 'UTF-8'); ?></a>
  </div>
</header>
