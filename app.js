angular.module('myApp', [])
  .controller('shoppingCart', mainCtrl);

function mainCtrl ($scope) 
{
	$scope.cart = [];
	console.log("mainCtrl");
        $scope.addItem = function (item)
	{
		if (item == "Washer")
		{
			$scope.cart.push({Item: item, price: "$800", done:false});
		}
		if (item == "Iphone")
		{
			$scope.cart.push({Item: item, price: "$700", done:false});
		}
		if (item == "MacBook")
		{
			$scope.cart.push({Item: item, price: "$1200", done:false});
		}
		 if (item == "Fridge")
                {
                        $scope.cart.push({Item: item, price: "$1000", done:false});
                }
		 if (item == "Monitor")
                {
                        $scope.cart.push({Item: item, price: "$320", done:false});
                }
             
            for(var i  = 0; i <$scope.cart.length; i++)
            {
                  console.log($scope.cart[i].Item);
            }

	}
        $scope.remove = function()
        {
          var oldCart = $scope.cart;
          angular.forEach(oldCart,function(x) {
            if(!x.done){
              $scope.cart.push(x);
            }
         });
        }

}
