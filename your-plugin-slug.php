<?php
/**
 * Plugin Name:     Your Plugin Slug
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     PLUGIN DESCRIPTION HERE
 * Author:          YOUR NAME HERE
 * Author URI:      YOUR SITE HERE
 * Text Domain:     your-plugin-slug
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Your_Plugin_Slug
 */

// Enqueue scripts and styles.
function your_plugin_slug_enqueue_assets() {
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	wp_enqueue_script(
		'your-plugin-slug-script',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	wp_enqueue_style(
		'your-plugin-slug-style',
		plugins_url( 'build/index.css', __FILE__ ),
		array(),
		$asset_file['version']
	);
}
add_action( 'admin_enqueue_scripts', 'your_plugin_slug_enqueue_assets' );
add_action( 'wp_enqueue_scripts', 'your_plugin_slug_enqueue_assets' );

// Your code starts here.
