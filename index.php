<?php 
/*
 * Plugin Name:       Tibbits Consulting Custom Blocks
 * Plugin URI:        https://tibbits.ca
 * Description:       A plugin for adding our custom Gutenberg blocks to WordPress.
 * Version:           1.0.0
 * Requires at least: 5.9
 * Requires PHP:      7.2
 * Author:            Matt Tibbits
 * Author URI:        https://tibbits.ca
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://example.com/my-plugin/
 * Text Domain:       tsc
 * Domain Path:       /languages
 */

/* When creating a plugin start with these commands to 
Create a package.json file and install the WordPress scripts package
    npm init -y
    npm install @wordpress/scripts --save-dev

By installing the scripts package will automatically allow access to WordPress additional packages, and we will not need to install them separately. 
eg. @wordpress/blocks, @wordpress/i18n, etc. 
import { registerBlockType } from '@wordpress/blocks';
*/

/* Add a scripts section to the package.json file */

/* npm run packages-update command to update the WordPress scripts package */

/* We can create a bundle by using the: 
    npm run start 
command. The terminal should be pointing at our plugin directory before we run this command. 
This command should create a directory called build. There's another
command that produces the same files called npm run build . The difference
between the commands is that the start command will watch our files for
changes and update the bundle, whereas the build command will produce
the bundle for production.
*/

// Secure plugin by checking if WordPress has been loaded or if this file is being accessed directly.
if ( !function_exists('add_action' ) ) {
    echo "Seems like you stumbled here by accident. 😛";
    exit;
}

// Setup 
define( 'UP_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );

// Includes 
include( UP_PLUGIN_DIR . 'includes/register_blocks.php' );
include( UP_PLUGIN_DIR . 'includes/blocks/search-form.php' );
include( UP_PLUGIN_DIR . 'includes/blocks/search-modal.php' );

// Hooks
add_action( 'init', 'up_register_blocks' );