// Notice that we do not have a controller since this component does not
// have any specialized logic.

import ProjectsListController from './ProjectsListController'

export default {
  name : 'projectsList',
  config : {
    //bindings         : {  users: '<', selected : '<', showDetails : '&onSelected' },
    templateUrl      : 'src/users/components/list/ProjectsList.html',
    controller       : [ '$rootScope','$scope','$mdSidenav',ProjectsListController]
  }
};
