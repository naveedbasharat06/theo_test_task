'use strict';

/**
 * @ngdoc function
 * @name ourAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ourAppApp
 */

//  angular.module('ourAppApp', [])
//  .service('myService', function ($http) {
//   return{
//     testing:function  () {
//    let games = []
//    return  $http.get('http://stage.whgstage.com/front-end-test/games.php')
//     }
//   }
//   })
//  .controller('MainCtrl', ['myService',async function  (myService) {
//    let data=  myService.testing();
//    console.log(data.$$state)
    
//  }]);
angular.module('ourAppApp')
  .controller('MainCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   $scope.message = 'Hello from FirstController';
   console.log('controller is working')
   let  slots = []
   let games = []
   let pokers = []
   let roulettes = []
   let blackjacks = []
   let others = []
    let categories = []
    let names = [];
    let classics = []
    $http.get('http://stage.whgstage.com/front-end-test/games.php')
        .then(function (response) {
            games = response.data;

            $scope.games = response.data;
            console.log($scope.games)
            $scope.games.forEach(element => {
                if (element.categories == "slots")
                    slots.push(element)
                else if (element.categories == "poker")
                    pokers.push(element)
                else if (element.categories == "roulette")
                    roulettes.push(element)
                else if (element.categories == "blackjack")
                    blackjacks.push(element)
                else if (element.categories == "classic")
                    classics.push(element)
                else
                    others.push(element)

                if (!categories.filter(singleCategory => singleCategory.categories[0] == element.categories[0]).length) {
                    categories.push(element)
                    if (element.categories[0] != "virtual" && element.categories[0] != "ball" && element.categories[0] != "new" && element.categories[0] != "fun" && element.categories[0] != "top")
                        names.push(element.categories[0])
                }
            });
            $scope.names = names
            debugger
            $scope.classics = classics;

        })

    $scope.slots = slots;
    $scope.pokers = pokers;
    $scope.roulettes = roulettes;
    $scope.blackjacks = blackjacks;
    $scope.others = others;




    $http.get('http://stage.whgstage.com/front-end-test/jackpots.php')
        .then(function (response) {
           let  amount = response.data;
            console.log(amount)
            games.forEach(element1 => {
                amount.forEach(element2 => {
                    if (element1.id == element2.game) {
                        element1.amount = element2.amount
                    }

                })
                $scope.games = games
            });
        });
  });
