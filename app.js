angular.module('myApp', [])
  .controller('shoppingCart', mainCtrl);

function mainCtrl ($scope) 
{
	$scope.cart = [];
	console.log("mainCtrl");
	$scope.addMac = function ()
	{
		$scope.cart.push({Item: "MacBook", price:"$1200", done:false});
		console.log("AddMac() function");
	};
        $scope.addItem = function (item)
	{
console.log("HOY");
		if (item == "Washer")
		{
			$scope.cart.push({Item: item, price: "800", done:false});
		}
		if (item == "Iphone")
		{
			$scope.cart.push({Item: item, price: "700", done:false});
		}
		if (item == "Mac")
		{
			$scope.cart.push({Item: item, price: "1200", done:false});
		}
		 if (item == "Fridge")
                {
                        $scope.cart.push({Item: item, price: "1000", done:false});
                }
		 if (item == "Monitor")
                {
                        $scope.cart.push({Item: item, price: "320", done:false});
                }
console.log("HEY");
             
            for(var i  = 0; i < cart.length; i++)
            {
                  console.log("HELLO");
                  console.log(cart[i].Item);
            }

	};
}
