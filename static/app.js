//app.js
console.log("hello from app.js");
var flightcheckApp = angular.module('FlightCheck', ['ngRoute']);
flightcheckApp.config(['$routeProvider',
function($routeProvider) {
	$routeProvider.when('/view1', {
		templateUrl : 'view1.html',
		controller : 'todoController'
	}).when('/view3', {
		templateUrl : 'view3.html',
		controller : 'todoController'
	}).otherwise({
		redirectTo : '/view1'
	});
}]);

var commands = {
	'add item *val' : function(val) {
		$scope.newTodo = val;
		$scope.addTodo();
		//$scope.$apply();
		var msg = new SpeechSynthesisUtterance('added' + JSON.stringify(val));
		window.speechSynthesis.speak(msg);
	},
	'load preflight checklist' : function() {
		$scope.loadChecklist();
		//$scope.$apply();
		var msg = new SpeechSynthesisUtterance('Checklist loaded');
		window.speechSynthesis.speak(msg);
	},
	'check *val' : function(val) {
		$scope.todos[parseInt(text2num(val)) - 1].done = true;
		//$scope.$apply();
		var msg = new SpeechSynthesisUtterance(JSON.stringify(val) + 'complete');
		window.speechSynthesis.speak(msg);
	},
	'remove *val' : function(val) {
		$scope.todos.splice(parseInt(text2num(val)) - 1, 1);
		//$scope.$apply();
		var msg = new SpeechSynthesisUtterance('Removed');
		window.speechSynthesis.speak(msg);
	},
	'clear completed' : function() {
		$scope.clearCompleted();
		//$scope.$apply();
		var msg = new SpeechSynthesisUtterance('All checked items cleared');
		window.speechSynthesis.speak(msg);

	}
};

    //maven.init();

    if(maven){
        maven.addCommands(commands);    
        //maven.debug();
        maven.start();
    }

var Small = {
	'zero' : 0,
	'one' : 1,
	'won' : 1,
	'fun' : 1,
	'1' : 1,
	'two' : 2,
	'2' : 2,
	'to' : 2,
	'too' : 2,
	'three' : 3,
	'3' : 3,
	'free' : 3,
	'four' : 4,
	'4' : 4,
	'for' : 4,
	'five' : 5,
	'5' : 5,
	'six' : 6,
	'6' : 6,
	'ticks' : 6,
	'sex' : 6,
	'seven' : 7,
	'southern' : 7,
	'7' : 7,
	'eight' : 8,
	'hate' : 8,
	'8' : 8,
	'it' : 8,
	'inc' : 8,
	'mate' : 8,
	'nine' : 9,
	'9' : 9,
	'ten' : 10,
	'tan' : 10,
	'ton' : 10,
	'10' : 10,
	'eleven' : 11,
	'11' : 11,
	'twelve' : 12,
	'12' : 12,
	'thirteen' : 13,
	'13' : 13,
	'fourteen' : 14,
	'14' : 14,
	'fifteen' : 15,
	'15' : 15,
	'sixteen' : 16,
	'16' : 16,
	'seventeen' : 17,
	'17' : 17,
	'eighteen' : 18,
	'18' : 18,
	'nineteen' : 19,
	'19' : 19,
	'twenty' : 20,
	'20' : 20,
	'thirty' : 30,
	'30' : 30,
	'forty' : 40,
	'40' : 40,
	'fifty' : 50,
	'50' : 50,
	'sixty' : 60,
	'60' : 60,
	'seventy' : 70,
	'70' : 70,
	'eighty' : 80,
	'80' : 80,
	'ninety' : 90,
	'90' : 90
};

var Magnitude = {
	'thousand' : 1000,
	'million' : 1000000,
	'billion' : 1000000000,
	'trillion' : 1000000000000,
	'quadrillion' : 1000000000000000,
	'quintillion' : 1000000000000000000,
	'sextillion' : 1000000000000000000000,
	'septillion' : 1000000000000000000000000,
	'octillion' : 1000000000000000000000000000,
	'nonillion' : 1000000000000000000000000000000,
	'decillion' : 1000000000000000000000000000000000,
};

var a,
    n,
    g;

function text2num(s) {
	a = s.toString().split(/[\s-]+/);
	n = 0;
	g = 0;
	a.forEach(feach);
	return n + g;
}

function feach(w) {
	var x = Small[w];
	if (x != null) {
		g = g + x;
	} else if (w == "hundred") {
		g = g * 100;
	} else {
		x = Magnitude[w];
		if (x != null) {
			n = n + g * x;
			g = 0;
		} else {
			alert("Unknown number: " + w);
		}
	}
}

