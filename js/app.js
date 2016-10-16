// INITILIZE APP
// ============================================================
angular.module("basicApp", ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          controller: 'homeCtrl',
          templateUrl: './home/home.html'
        })
        .state('profile', {
          url: '/profile',
          controller: 'profileCtrl',
          templateUrl: './profile/profile.html'
        });

  })
