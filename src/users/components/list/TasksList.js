// Notice that we do not have a controller since this component does not
// have any specialized logic.

import TasksListController from './TasksListController'

export default {
  name : 'tasksList',
  config : {
    templateUrl      : 'src/users/components/list/TasksList.html',
    controller       : [ '$rootScope','$scope','$mdSidenav',TasksListController]
  }
};
