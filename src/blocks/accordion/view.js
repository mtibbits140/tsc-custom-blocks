(function($){
  $(function(){
    // Toggle logic using aria attributes and hidden on <dd>
    $(document).on('click', '.wp-block-tsc-accordion .accordion-header', function(){
      const $dt = $(this);
      const $accordion = $dt.closest('.wp-block-tsc-accordion');
      const $panel = $dt.next('.accordion-panel');

      // If already open, close it
      if ($dt.hasClass('is-active')) {
        $dt.removeClass('is-active');
        $panel.slideUp(200);
        const $icon = $dt.find('svg.accordion-icon path');
        if ($icon.length) {
          $icon.attr('d', 'M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z');
        }
        return;
      }

      // Close others first (single-open)
      $accordion.find('.accordion-header.is-active').each(function(){
        const $other = $(this);
        $other.removeClass('is-active');
        $other.next('.accordion-panel').slideUp(200);
        const $icon = $other.find('svg.accordion-icon path');
        if ($icon.length) {
          $icon.attr('d', 'M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z');
        }
      });

      // Open current
      $dt.addClass('is-active');
      $panel.slideDown(200);
      const $icon = $dt.find('svg.accordion-icon path');
      if ($icon.length) {
        $icon.attr('d', 'M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z');
      }
    });
  });
})(jQuery);
