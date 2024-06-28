/**
 * WordPress dependencies
 */
import { getContext, getElement, store } from '@wordpress/interactivity';
import { startPlaygroundWeb } from 'https://playground.wordpress.net/client/index.js'; // or '@wp-playground/client';

let playgroundClient = false;

store( 'wporg/themes/preview', {
	state: {
		get isLoaded() {
			const context = getContext();
			return context.isLoaded;
		},
	},
	actions: {
		onLoad() {
			const context = getContext();
			context.isLoaded = true;
			wp.a11y?.speak( context.label.postNavigate, 'polite' );
		},
		async navigateIframe( event ) {
			const context = getContext();
			const { selectedElement: ref } = event;
			const isSelected = 'wporg-select' === event.type;
			if ( ! ref?.dataset ) {
				return;
			}

			context.isLoaded = context.isPlayground;
			if ( ref.dataset.style_variation ) {
				context.selected.style_variation = isSelected ? ref.dataset.style_variation : null;
			}
			if ( ref.dataset.pattern_name ) {
				context.selected.pattern_name = isSelected ? ref.dataset.pattern_name : null;
			}

			const params = new URLSearchParams( '' );
			if ( context.selected.style_variation ) {
				params.set( 'style_variation', context.selected.style_variation );
			}
			if ( context.selected.pattern_name ) {
				params.set( 'pattern_name', context.selected.pattern_name );
				params.set( 'page_id', 9999 );
			}

			const previewURL = new URL( context.previewBase );
			previewURL.search = params.toString();
			context.url = previewURL;

			if ( playgroundClient ) {
				const currentURL    = await playgroundClient.getCurrentURL();
				const playgroundParams = new URLSearchParams( currentURL.replace( /^[/]?/, '' ) );

				params.entries().forEach( ( [ key, value ] ) => { playgroundParams.set( key, value ); } );

				playgroundClient.goTo( '/?' + playgroundParams.toString() );

				// Ensure the current page url remains as a playground.
				params.set('playground-preview', '1');
			}

			const permalinkURL = new URL( context.permalink );
			params.delete( 'page_id' );
			permalinkURL.search = params.toString();

			window.history.replaceState( {}, '', permalinkURL );
		},
		startPlayground() {
			const context = getContext();
			const { ref } = getElement();

			// Set it as immediately loaded.
			// The loading overlay doesn't play nicely with the low latency of playground.
			context.isLoaded = true;

			startPlaygroundWeb({
				iframe: ref,
				remoteUrl: 'https://playground.wordpress.net/remote.html',
				blueprint: JSON.parse( context.blueprint )
			}).then( ( playground ) => {
				playgroundClient = playground;

				// If the preview URL has any query params, head straight there.
				const currentPreviewURL = new URL( context.url );
				if ( currentPreviewURL.searchParams.size ) {
					playgroundClient.goTo( '/?' + currentPreviewURL.searchParams.toString() );
				}
			});
		},
	},
} );
