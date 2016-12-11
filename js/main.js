/****************************************************************************************
 * Require.js Configuration
 *****************************************************************************************/
require.config({
	waitSeconds : 0,
	urlArgs: "v=1.0",
	deps: ['app'],
	map: {
		'*': {
			'css': 'js/libs/require-css/css.js'
		}
	},

	paths: {
		text: 'libs/require/text',
		jquery: 'libs/jquery/jquery-2.1.1.min',
		mockjax: 'libs/jquery-mockjax/jquery.mockjax.min',
		underscore: 'libs/underscore/underscore-min',
		bootstrap: 'libs/bootstrap/bootstrap.min',
		mockEndpointsCustom: 'mockEndpoints/mockEndpointsCustom',
		templates: '../templates',
		components: '../components'
	},

	shim: {
		bootstrap: {
			deps: ['jquery']
		},
		mockjax: {
			deps: ['jquery']
		},
		jquery: {
			exports: '$'
		},
		underscore: {
			exports: '_'
		},
		mockEndpointsCustom: {
			deps: ['mockjax']
		}
	}
});
