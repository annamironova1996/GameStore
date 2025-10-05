<?php
/**
 * Plugin Name:       Blocks Gamestore
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.1
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blocks-gamestore
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define ( 'BLOCKS_GAMESTORE_PATH', plugin_dir_path( __FILE__ ) );

require_once( BLOCKS_GAMESTORE_PATH . 'blocks.php');

add_filter('block_categories_all', function($categories) {
	return array_merge($categories, [
		[
			'slug' => 'gamestore',
			'title' => 'Gamestore',
		]
	]);
});

function create_block_blocks_gamestore_block_init() {
    if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
        wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
    } else if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
        wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
    } else {
        $manifest_data = require __DIR__ . '/build/blocks-manifest.php';
        foreach ( array_keys( $manifest_data ) as $block_type ) {
            register_block_type( __DIR__ . "/build/{$block_type}" );
        }
    }
}
add_action( 'init', 'create_block_blocks_gamestore_block_init' );

function add_render_callback_to_games_line($args, $block_name) {
    if ($block_name === 'blocks-gamestore/block-games-line') {
        $args['render_callback'] = 'view_block_games_line';
    }
    return $args;
}
add_filter('register_block_type_args', 'add_render_callback_to_games_line', 10, 2);

