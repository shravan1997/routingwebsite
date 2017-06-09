app.config(function($routeProvider){
    $routeProvider
      .when('/partner', {
           templateUrl:'partner.html',
           controller: 'partnerController'
      })
      .when('/users', {
           templateUrl:'users.html'
      })
      .when('/events', {
           templateUrl:'events.html'
      })
      .when('/notifications', {
           templateUrl:'notifications.html'
      })
      .when('/admins', {
           templateUrl:'admins.html'
      })
      .when('/scheduling', {
           templateUrl:'scheduling.html'
      })
      .when('/sparks', {
           templateUrl:'sparks.html'
      });
});
