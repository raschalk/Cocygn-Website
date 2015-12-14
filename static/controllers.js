/* Create an angular controller called todoController in FlightCheck module which can be accessed
 * through the FlightcheckApp variable.  */
console.log("hello from controllers.js");
flightcheckApp.controller('todoController', ['$scope', 'todoFactory', 'speechFactory',
    function ($scope,todoFactory,speechFactory) {
 
	$scope.todos = todoFactory.getTodos();
	
//  following line to implement after addTodo is moved to factory 
	//todoFactory.addTodo($scope.todos);
	
	$scope.addTodo = function() {
		$scope.todos.push({
			'title' : $scope.newTodo,
			'done' : false
		});
		$scope.newTodo = '';	
	};
	
	$scope.loadChecklist = function() {

		var msg = new SpeechSynthesisUtterance('Good evening, Lets Review the checklist.');
		window.speechSynthesis.speak(msg);
		/*
		 PRE-FLIGHT INSPECTION
		 CABIN
		 Documents – A.R.R.O.W.
		 Control Lock – REMOVE
		 Ignition Switch – OFF
		 Avionics Switch - OFF
		 Master Switch – ON
		 Flaps – DOWN
		 Fuel Quantity – CHECK
		 Master Switch – OFF
		 Fuel Valve – ON BOTH
		 */

		$scope.newTodo = 'Pre-flight Cabin Documents';
		$scope.addTodo();
		$scope.newTodo = 'Pre-flight Control Lock – REMOVE';
		$scope.addTodo();
		$scope.newTodo = 'Pre-flight Ignition Switch – OFF';
		$scope.addTodo();
		$scope.newTodo = 'Pre-flight Avionics Switch - OFF';
		$scope.addTodo();
		$scope.newTodo = 'Pre-flight Master Switch – ON';
		$scope.addTodo();
		$scope.newTodo = 'Pre-flight Flaps – DOWN';
		$scope.addTodo();
		$scope.newTodo = 'Pre-flight Fuel Quantity – CHECK';
		$scope.addTodo();
		$scope.newTodo = 'Pre-flight Master Switch – OFF';
		$scope.addTodo();
		$scope.newTodo = 'Pre-flight Fuel Valve – ON BOTH';
		$scope.addTodo();
		//$scope.$apply();
	};

	$scope.clearCompleted = function() {
		$scope.todos = $scope.todos.filter(function(item) {
			return !item.done;
		});
	};

	$scope.$watch('todos', function(newValue, oldValue) {
		if (newValue != oldValue) {
			localStorage.setItem('todos', JSON.stringify(newValue));
		}
	}, true);


$scope.voice = speechFactory.listen();


}]);

