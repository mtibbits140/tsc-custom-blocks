<?php

    function tsc_search_form_render_cb($attributes) {
        $bgColor = esc_attr($attributes['bgColor']);
        $textColor = esc_attr($attributes['textColor']);
        $styleAttributes = "background-color: $bgColor; color: $textColor;";
        ob_start();
        ?>
        <div style="<?php echo $styleAttributes; ?>" class="wp-block-tsc-search-form">
            <h3>
                <?php esc_html_e( 'Search', 'tsc' ); ?>: 
                <?php the_search_query(); ?>
            </h3>
            <form action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get">
              <input type="text" placeholder="<?php esc_html_e( 'Search', 'tsc' ); ?>" name="s" value="<?php the_search_query(); ?>" />
              <div class="btn-wrapper">
                <button type="submit" style="<?php echo $styleAttributes; ?>"><?php esc_html_e( 'Search', 'tsc' ); ?></button>
              </div>
            </form>
        </div>
        <?php    

        $output = ob_get_contents();
        ob_end_clean();
        return $output;
    }
