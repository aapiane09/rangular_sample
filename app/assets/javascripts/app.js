angular.module('rangularApp', ['ngRoute', 'templates'])
  .config(config)
  .controller('HomeIndexController', HomeIndexController);

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeIndexController',
      controllerAs: 'homeIndexCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider
  .html5Mode({
    enabled: true,
    requireBase: false
  });
};

HomeIndexController.$inject=[];
function HomeIndexController() {
  var vm = this;
  vm.greeting = "what's up?"

  $http({
    method: 'GET',
    url: baseUrl + '/api/todos'
  }).then(function successCallback(response) {
    console.log('response for all projects:', response);
    // probably do something with the response data
  }, function errorCallback(error) {
    console.log('There was an error getting the data', error);
  });
};
