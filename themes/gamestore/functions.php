<?php

//подключение стилей и шрифтов 
function gamestore_styles() {
	wp_enqueue_style('gamestore-general', get_template_directory_uri() . '/assets/css/gamestore.css', [], wp_get_theme()->get( 'Version' ));
	wp_enqueue_script('gamestore-theme-related', get_template_directory_uri() . '/assets/js/gamestore-theme-related.js', [], wp_get_theme()->get( 'Version' ), true );
}
add_action( 'wp_enqueue_scripts', 'gamestore_styles' );


//подключение шрифта из google-fonts
function gamestore_google_font(){
    $font_url = '';
    $font = 'Montserrat';
    $font_extra = 'ital,wght@0,400;0,700;1,400;1,700';
    
    if ( 'off' !== _x( 'on', 'Google font: on or off', 'gamestore' ) ) {
        $query_args = array(
            'family' => $font . ':' . $font_extra,
            'display' => 'swap',
        );
        
        $font_url = add_query_arg( $query_args, 'https://fonts.googleapis.com/css2' );
    }
    
    return $font_url;
}

function gamestore_google_font_script(){
    $font_url = gamestore_google_font();
    if ( ! empty( $font_url ) ) {
        wp_enqueue_style( 
            'gamestore-google-font', 
            $font_url, 
            array(), 
            null 
        );
    }
}
add_action('wp_enqueue_scripts', 'gamestore_google_font_script');