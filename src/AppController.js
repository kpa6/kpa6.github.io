/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController($mdSidenav,$rootScope,$scope) {
  var self = this;

  self.selected     = null;
  self.users        = [ ];
  self.selectUser   = selectUser;
  self.toggleList   = toggleUsersList;
  self.toggleNewTask  = toggleNewTask;
  self.toggleNewPoject = toggleNewPoject;
  self.showSearch   = false;
  self.showEditTask   = false;

  $rootScope.projectsList = [
    {'name':'Private', 'taskCount': 8},
    {'name':'Decode','taskCount': 25},
    {'name':'family','taskCount': 3},
    {'name':'Cookle','taskCount': 13}
  ];


  // Load all registered users

  // UsersDataService
  //       .loadAllUsers()
  //       .then( function( users ) {
  //         self.users    = [].concat(users);
  //         self.selected = users[0];
  //       });

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleUsersList() {
    $mdSidenav('left').toggle();
  }
  function toggleNewTask(){
    $mdSidenav('newTaskPanel').toggle();
  }
  function toggleNewPoject(){
    $mdSidenav('newProjectPanel').toggle();    
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectUser ( user ) {
    self.selected = angular.isNumber(user) ? $scope.users[user] : user;
  }
}

export default ['$mdSidenav', '$rootScope','$scope',AppController ];
