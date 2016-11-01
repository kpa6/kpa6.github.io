// Load the custom app ES6 modules

import ProjectsList from 'src/users/components/list/ProjectsList';
import TasksList from 'src/users/components/list/TasksList';
//import UserDetails from 'src/users/components/details/UserDetails';

// Define the Angular 'users' module

export default angular
  .module("projects", ['ngMaterial'])
  .component(ProjectsList.name, ProjectsList.config)
  .component(TasksList.name, TasksList.config)