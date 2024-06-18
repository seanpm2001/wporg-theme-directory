<?php
/**
 * Title: Page: Upload
 * Slug: wporg-themes-2024/page-upload
 * Inserter: no
 */

?>
<!-- wp:group {"align":"wide","layout":{"type":"constrained","justifyContent":"left"}} -->
<div class="wp-block-group alignwide">
	<!-- wp:heading {"level":1,"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|30"}}}} -->
	<h1 class="wp-block-heading" style="margin-bottom:var(--wp--preset--spacing--30)"><?php esc_html_e( 'Submit your theme or theme update to the directory', 'wporg-themes' ); ?></h1>
	<!-- /wp:heading -->

	<!-- wp:paragraph -->
	<p><?php esc_html_e( 'Your theme will be submitted for review to be distributed on the official WordPress.org Theme Directory.', 'wporg-themes' ); ?></p>
	<!-- /wp:paragraph -->

	<!-- wp:heading -->
	<h2><?php esc_html_e( 'Read the requirements before updating a theme', 'wporg-themes' ); ?></h2>
	<!-- /wp:heading -->

	<!-- wp:paragraph -->
	<p>
		<?php
		echo wp_kses_post(
			sprintf(
				/* translators: 1: Link to WordPress.org; 2: Link to the Theme Handbook Required Review items. */
				__( 'In order to have your theme hosted on <a href="%1$s">WordPress.org</a>, your code is required to comply with all the <a href="%2$s">requirements on the Themes Team handbook page</a>.', 'wporg-themes' ),
				esc_url( 'https://wordpress.org/' ),
				esc_url( 'https://make.wordpress.org/themes/handbook/review/required/' )
			)
		);
		?>
	</p>
	<!-- /wp:paragraph -->

	<!-- wp:wporg/theme-upload-form /-->

	<!-- wp:heading -->
	<h2><?php esc_html_e( 'How to upload a theme update', 'wporg-themes' ); ?></h2>
	<!-- /wp:heading -->

	<!-- wp:paragraph -->
	<p>
		<?php
		echo wp_kses_post(
			sprintf(
				/* translators: 1: style.css; 2: themename.zip */
				__( 'If you are uploading a theme update, simply increase the version inside of %1$s and upload the %2$s file again, just like you do with a new theme.', 'wporg-themes' ),
				'<code>style.css</code>',
				'<code>theme-name.zip</code>'
			)
		);
		?>
	</p>
	<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->

<!-- wp:spacer {"height":"60px","className":"alignwide","style":{"spacing":{"margin":{"top":"0","bottom":"var:preset|spacing|50"}}}} -->
<div style="margin-top:0;margin-bottom:var(--wp--preset--spacing--50);height:60px" aria-hidden="true" class="wp-block-spacer alignwide"></div>
<!-- /wp:spacer -->
