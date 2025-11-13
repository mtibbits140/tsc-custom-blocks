/******/ (() => { // webpackBootstrap
/*!*****************************************!*\
  !*** ./src/blocks/search-modal/view.js ***!
  \*****************************************/
(function ($) {
  // Portal the form wrapper to <body> while open to escape header stacking context
  function portalForm($block) {
    var $wrapper = $block.find('#search-form-wrapper');
    if (!$wrapper.length) return $wrapper;
    if (!$wrapper.data('tscPlaceholder')) {
      var $placeholder = $('<span class="tsc-search-form-placeholder" style="display:none"></span>');
      $placeholder.insertBefore($wrapper);
      $wrapper.data('tscPlaceholder', $placeholder);
    }

    // Detach and append to body
    $wrapper.detach().appendTo('body');
    $wrapper.data('tscBlock', $block);

    // Copy CSS custom properties from the block to the wrapper so styles persist outside
    var cs = window.getComputedStyle($block.get(0));
    var vars = ['--tsc-search-modal-bg', '--tsc-search-button-bg', '--tsc-search-button-text', '--tsc-search-text', '--tsc-search-placeholder'];
    vars.forEach(function (v) {
      var val = cs.getPropertyValue(v);
      if (val) {
        $wrapper.get(0).style.setProperty(v, val.trim());
      }
    });

    // Inline fixed positioning for predictable overlay layering
    var vw = window.innerWidth || document.documentElement.clientWidth;
    var widthValue = vw >= 1024 ? '60vw' : vw >= 768 ? '90vw' : '92%';
    $wrapper.css({
      position: 'fixed',
      top: vw >= 1024 ? '30%' : '45%',
      left: '50%',
      transform: vw >= 1024 ? 'translateX(-50%)' : 'translate(-50%, -50%)',
      width: widthValue,
      right: '',
      zIndex: 900,
      display: 'block'
    });
    $wrapper.addClass('tsc-search-modal-portal');

    // Inject a close button into the portaled wrapper if not present
    if (!$wrapper.data('tscCloseBtn')) {
      var $btn = $('<button type="button" class="search-icon-button close-icon" aria-label="Close search"></button>');
      $btn.append('<svg class="icon-close" width="32" height="32" viewBox="0 0 24 24" fill="#fff" role="img" aria-hidden="true"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" /></svg>');
      $wrapper.append($btn);
      $wrapper.data('tscCloseBtn', $btn);
    }
    return $wrapper;
  }
  function restoreForm($block) {
    var $wrapper = $('body').find('#search-form-wrapper');
    if (!$wrapper.length) return;
    var $placeholder = $block.find('.tsc-search-form-placeholder');
    if ($placeholder.length) {
      $wrapper.insertBefore($placeholder);
      $placeholder.remove();
      $block.find('#search-form-wrapper').css({
        position: '',
        top: '',
        left: '',
        transform: '',
        width: '',
        right: '',
        zIndex: '',
        display: ''
      });
      // Clear copied CSS vars
      var vars = ['--tsc-search-modal-bg', '--tsc-search-button-bg', '--tsc-search-button-text', '--tsc-search-text', '--tsc-search-placeholder'];
      vars.forEach(function (v) {
        $block.find('#search-form-wrapper').get(0).style.removeProperty(v);
      });
      $block.find('#search-form-wrapper').removeClass('tsc-search-modal-portal');
    }
  }
  $(document).on('click', '.wp-block-tsc-search-modal .search-icon-button', function (e) {
    e.preventDefault();
    var $block = $(this).closest('.wp-block-tsc-search-modal');
    var modalBg = $block.css('--tsc-search-modal-bg');
    if (!$block.hasClass('show')) {
      $block.addClass('show');
      $('html').addClass('overlay');
      var $wrapper = portalForm($block);
      if (modalBg) {
        document.documentElement.style.setProperty('--tsc-search-modal-bg', modalBg);
      }
      if ($wrapper) {
        $wrapper.find('#search-form #search').trigger('focus');
      }
    } else {
      // If already open, just refocus the input
      var $wrapper = $('#search-form-wrapper');
      if ($wrapper.length) {
        $wrapper.find('#search-form #search').trigger('focus');
      }
    }
  });

  // Dedicated handler for portaled close button
  $(document).on('click', '#search-form-wrapper .search-icon-button.close-icon', function (e) {
    e.preventDefault();
    var $wrapper = $('#search-form-wrapper');
    var $block = $wrapper.data('tscBlock');
    if ($block && $block.length) {
      $('html').removeClass('overlay');
      $block.removeClass('show');
      restoreForm($block);
    }
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=view.js.map