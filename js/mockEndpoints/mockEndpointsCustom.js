/****************************************************************************************
 * Mock the API data.
*****************************************************************************************/
define([
	'jquery'
	], function ($) {

	'use strict';
	$.mockjax({
		url: 'http://localhost:8081/api/menu',
		type: 'GET',
		responseTime: 300,
		response: function (request) {
			console.log('>>>> ', request);
			var responseMock = [
				{
					'productId': 'coffee1',
					'title': 'Gingerbread Frappuccino',
					'desc': 'A delicious combination of coffee and gingerbread flavour syrup blended with milk and ice.',
					'imagePath': 'img/menu1.jpg',
					'addedModifierStr': '',
					'coffeePrice': 2.97,
					'totalPrice': 2.97,
					'modifiers': [
						{
							'modName': 'Expresso Shot',
							'modPrice': 1.09

						},
						{
							'modName': 'Whipped Cream',
							'modPrice': 1.21
						},
						{
							'modName': 'Caramel Syrup',
							'modPrice': 1.11
						}
					]

				},
				{
					'productId': 'coffee2',
					'title': 'Peppermint Mocha',
					'imagePath': 'img/menu2.png',
					'desc': 'A holiday classic made with expresso, steamed milk, sweet mocha sauce and peppermint flavored syrup.',
					'addedModifierStr': '',
					'coffeePrice': 3.97,
					'totalPrice': 3.97,
					'modifiers': [
						{
							'modName': 'Expresso Shot',
							'modPrice': 1.09

						},
						{
							'modName': 'Whipped Cream',
							'modPrice': 1.21
						},
						{
							'modName': 'Peppermint Flavored Syrup',
							'modPrice': 1.11
						},
						{
							'modName': 'Sweet Mocha Sauce',
							'modPrice': 1.31
						}
					]
				},
				{
					'productId': 'coffee3',
					'title': 'Blonde Roast',
					'desc': 'Lightly roasted coffee that is soft, mellow and flavorful. Easy drinking with milk and sugar.',
					'imagePath': 'img/menu3.png',
					'addedModifierStr': '',
					'coffeePrice': 1.59,
					'totalPrice': 1.59,
					'modifiers': [
						{
							'modName': 'Expresso Shot',
							'modPrice': 1.09

						},
						{
							'modName': 'Organic Milk and Sugar',
							'modPrice': 1.03
						}
					]

				},
				{
					'productId': 'coffee4',
					'title': 'Peppermint Hot Chocolate',
					'desc': 'A classic holiday hot chocolate made with chocolate mocha sauce, peppermint flavour syrup with whipped cream and dark chocolate curls.',
					'imagePath': 'img/menu4.png',
					'addedModifierStr': '',
					'coffeePrice': 4.29,
					'totalPrice': 4.29,
					'modifiers': [
						{
							'modName': 'Expresso Shot',
							'modPrice': 1.09

						},
						{
							'modName': 'Chocolate Mocha Sauce',
							'modPrice': 2.05
						},
						{
							'modName': 'Peppermint Flavour Syrup',
							'modPrice': 1.19
						},
						{
							'modName': 'Dark Chocolate Curls',
							'modPrice': 1.87
						}
					]
				},
				{
					'productId': 'coffee5',
					'title': 'Spiced Sweet Cream Cold Brew',
					'desc': 'Our Narino 70 cold brew coffee get dressed up for holidays with dash of spice and home made sweet cream.',
					'imagePath': 'img/menu5.png',
					'addedModifierStr': '',
					'coffeePrice': 5.46,
					'totalPrice': 5.46,
					'modifiers': [
						{
							'modName': 'Expresso Shot',
							'modPrice': 1.09

						},
						{
							'modName': 'Mayan Spice',
							'modPrice': 0.79
						},
						{
							'modName': 'Organic Milk and Sugar',
							'modPrice': 1.03
						}
					]
				}
			];

			console.log('response >>>> ', responseMock);
			this.status = 200;
			this.responseText = responseMock;
		}
	});
});
