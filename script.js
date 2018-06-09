var app = angular.module("myTodoList", ['ngAnimate']);

app.controller("TheAdder", function($scope) {
    $scope.products = [ ];

    $scope.addItem = function () 
    {
    	if($scope.addMe == null)
    	{
    		$scope.error= "Empty Entry not allowed";
    	}
    	else
    	{
    		$scope.error= "";
    		$scope.products.push($scope.addMe);
    	}
    	$scope.addMe = null;
    }

    $scope.removeItem = function (x) 
    {
        $scope.products.splice(x, 1);
    }

    $scope.editItem = function (x) 
    {
    	this.boxShow= true;
    }
    $scope.saveItem = function (index, x) 
	{
		if(x == null || x=="")
    	{
    		$scope.error= "Empty Entry not allowed";
    	}
    	else
    	{
    		$scope.error= "";
    		$scope.products[index] = x;
    	}
    	this.boxShow = false;
    	this.alter = "";
    }

    $scope.cancelchange = function($index)
    {
    	this.boxShow = false;
    	this.alter = "";
    }

});

app.animation('.fade', function() {
  return {
    enter: function(element, done) {
      element.css('display', 'none');
      $(element).fadeIn(1000, function() {
        done();
      });
    },
    leave: function(element, done) {
      $(element).fadeOut(1000, function() {
        done();
      });
    }
  }
})