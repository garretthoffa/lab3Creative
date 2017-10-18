angular.module('myApp', [])
  .controller('shoppingCart', mainCtrl);

function mainCtrl ($scope) 
{
	$scope.cart = [];

        $scope.addItem = function (item)
	{
		if (item == "Washer")
		{
			$scope.cart.push({Item: item, price: "800"})
		}
		if (item == "Iphone")
		{
			$scope.cart.push({Item: item, price: "700"})
		}
		if (item == "Mac")
		{
			$scope.cart.push({Item: item, price: "1200"})
		}
		 if (item == "Fridge")
                {
                        $scope.cart.push({Item: item, price: "1000"})
                }
		 if (item == "Monitor")
                {
                        $scope.cart.push({Item: item, price: "320"})
                }

	};
}
