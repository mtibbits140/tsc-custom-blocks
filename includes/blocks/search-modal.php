<?php

  function tsc_search_modal_render_cb($attributes) {
    $textColor = esc_attr($attributes['textColor']);
    $modalBgColor = esc_attr($attributes['modalBgColor']);
    $buttonBgColor = esc_attr($attributes['buttonBgColor']);
    $buttonTextColor = esc_attr($attributes['buttonTextColor']);
    $styleAttributes = "background-color: $modalBgColor; color: $textColor;";
        
    ob_start(); ?>

  <div class="wp-block-tsc-search-modal" style="--tsc-search-modal-bg: <?php echo esc_attr($modalBgColor); ?>; --tsc-search-button-bg: <?php echo esc_attr($buttonBgColor); ?>; --tsc-search-button-text: <?php echo esc_attr($buttonTextColor); ?>; --tsc-search-text: <?php echo esc_attr($textColor); ?>; --tsc-search-placeholder: <?php echo esc_attr($textColor); ?>; color: <?php echo esc_attr($textColor); ?>;">
      <div id="search-form-wrapper">
        <form action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get" id="search-form">
          <input type="text" name="s" id="search" title="Search this site" value="<?php the_search_query(); ?>" placeholder="Search">            
          <input type="submit" name="search_submit" id="searchsubmit" class="button" value="Search">
        </form>
      </div>
      <?php
        $triggerLabel = isset($attributes['triggerLabel']) ? $attributes['triggerLabel'] : '';
        $triggerMediaUrl = isset($attributes['triggerMediaUrl']) ? $attributes['triggerMediaUrl'] : '';
      ?>
      <div class="search-icon-wrapper">
        <button class="search-icon-button" aria-label="<?php echo $triggerLabel ? esc_attr($triggerLabel) : esc_attr__('Search', 'tsc'); ?>" type="button">
          <?php if ($triggerMediaUrl) : ?>
            <img src="<?php echo esc_url($triggerMediaUrl); ?>" alt="" class="search-trigger-img" />
          <?php else : ?>
            <svg class="icon-search" width="32" height="32" viewBox="0 0 24 24" role="img" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
          <?php endif; ?>
          <?php if (!empty($triggerLabel)) : ?><span class="search-trigger-label"><?php echo esc_html($triggerLabel); ?></span><?php endif; ?>
        </button>
      </div>
    </div>
    <?php

    $output = ob_get_contents();
    ob_end_clean();
    return $output;
    }
