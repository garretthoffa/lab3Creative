angular.module('myApp', [])
  .controller('shoppingCart', mainCtrl);

function mainCtrl ($scope) 
{
	$scope.cart = [];
	$scope.total=0;
	console.log("mainCtrl");
        $scope.addItem = function (item)
	{
		if (item == "Washer")
		{
			$scope.cart.push({Item: item, price: 800, done:false});
			$scope.total += 800;
		}
		if (item == "Iphone")
		{
			$scope.cart.push({Item: item, price: 700, done:false});
			$scope.total += 700;
		}
		if (item == "MacBook")
		{
			$scope.cart.push({Item: item, price: 1200, done:false});
			$scope.total += 1200;
		}
		 if (item == "Fridge")
                {
                        $scope.cart.push({Item: item, price: 1000, done:false});
                	$scope.total += 1000;
		}
		 if (item == "Monitor")
                {
                        $scope.cart.push({Item: item, price: 320, done:false});
                	$scope.total += 320;
		}
             
            for(var i  = 0; i <$scope.cart.length; i++)
            {
                  console.log($scope.cart[i].Item);
            }

	}
        $scope.remove = function()
        {
          var oldCart = $scope.cart;
	  $scope.cart=[];
	  $scope.total=0;
          angular.forEach(oldCart,function(x) {
            if(!x.done){
              $scope.cart.push(x);
	      $scope.total += x.price;
            }
         });
        };
	$scope.buy = function()
	{
	  $scope.cart=[];
          $scope.total=0;
	  alert("Your Credit Card will be billed shortly");
	}

}
