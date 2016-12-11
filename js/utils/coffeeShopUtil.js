/****************************************************************************************
 * Util class specifically for common functions dealing with Coffee Shop Application.
*****************************************************************************************/
define([
    'jquery',
    'underscore'
],function($, _) {
    'use strict';

    var updateTotalMenuPrice = function(e, viewModelData, thisView) {
    	var cloneVM = _.clone(viewModelData);
    	cloneVM = JSON.parse(JSON.stringify(cloneVM));
    	var currentItemPrice = $(e.currentTarget).attr('value');
    	var currentProdId = $(e.currentTarget).attr('productId');
    	if(currentItemPrice && currentProdId) {
    		var isChecked = $(e.currentTarget).is(':checked');
    		var currentObj = _.findWhere(cloneVM, {'productId': currentProdId});
    		var currentObjIndex = _.findIndex(cloneVM, function(item) { return item.productId == currentProdId});
    		var vmObj = viewModelData[currentObjIndex];
    		thisView.$set(vmObj, 'totalPrice', parseFloat(calculateNewPrice(isChecked)));
    	}

    	function calculateNewPrice(isChecked) {
    		var newPrice = null;
    		newPrice = (isChecked) ? currentObj.totalPrice + parseFloat(currentItemPrice) : currentObj.totalPrice - parseFloat(currentItemPrice);
    		newPrice = newPrice.toFixed(2);
    		return newPrice;
    	}
    };

    var getCurrentObjIndex = function(e, viewModelData, thisView) {
        var retriveIndxObj = {
            'currentObj': null,
            'currentObjIndex' : null
        };
        var cloneVM = _.clone(viewModelData);
        cloneVM = JSON.parse(JSON.stringify(cloneVM));
        var currentProdId = $(e.currentTarget).attr('productId');
        if(currentProdId) {
            var currentObj = _.findWhere(cloneVM, {'productId': currentProdId});
            var currentObjIndex = _.findIndex(cloneVM, function(item) { return item.productId == currentProdId});
            retriveIndxObj['currentObj'] = currentObj;
            retriveIndxObj['currentObjIndex'] = currentObjIndex;
        }

        return retriveIndxObj;
    };

    var generateModifierString = function(listOfaddedModifier) {
        var modfierNameArray = [];
        _.each(listOfaddedModifier, function(item, index) {
            var modName = $(item).attr('modName');
            var modPrice = $(item).attr('modPrice');
            var modStr = modName + ' - $' + modPrice;
            if(modName) {
                modfierNameArray.push(modStr);
            }
        });
        var modifierString = (modfierNameArray.length > 0) ? modfierNameArray.join(', ') : '';
        return modifierString;
    };

    var getUpdateInReviewOrderPrice = function(reviewOrder) {
        var updatedReviewOrderPrice = 0;
        _.each(reviewOrder, function(obj, index) {
            var obj = JSON.parse(JSON.stringify(obj));
            updatedReviewOrderPrice = updatedReviewOrderPrice + obj.totalPrice;
            updatedReviewOrderPrice = parseFloat(updatedReviewOrderPrice.toFixed(2));
        });
        return updatedReviewOrderPrice;
    };

    return {
		updateTotalMenuPrice: updateTotalMenuPrice,
        getCurrentObjIndex: getCurrentObjIndex,
        generateModifierString: generateModifierString,
        getUpdateInReviewOrderPrice: getUpdateInReviewOrderPrice
	};
});
