<?php

    function up_register_blocks() {

        $blocks = [
            [ 'name' => 'search-form', 'options' => [
                'render_callback' => 'tsc_search_form_render_cb'
                ] 
            ],
            [ 'name' => 'search-modal', 'options' => [
                'render_callback' => 'tsc_search_modal_render_cb'
                ] 
            ],
        ];

        foreach ( $blocks as $block ) {
            register_block_type( 
                UP_PLUGIN_DIR . 'build/blocks/' . $block['name'], 
                isset ( $block['options'] ) ? $block['options'] : [] 
            );
        };  
    }