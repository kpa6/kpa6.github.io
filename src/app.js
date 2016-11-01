// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from 'src/AppController';
//import Users from 'src/users/Users';
import Projects from 'src/users/Projects';

export default angular.module( 'starter-app', [ 'ngMaterial',Projects.name ] )
  .config(($mdIconProvider, $mdThemingProvider) => {
    // Register the user `avatar` icons
    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu", "./assets/svg/menu.svg", 24)
      .icon("share", "./assets/svg/share.svg", 24)
      .icon("google_plus", "./assets/svg/google_plus.svg", 24)
      .icon("hangouts", "./assets/svg/hangouts.svg", 24)
      .icon("twitter", "./assets/svg/twitter.svg", 24)
      .icon("phone", "./assets/svg/phone.svg", 24);


    $mdThemingProvider.definePalette('cstm_pallete',{
        '50': '#292c33',
        '100': '#212121',
        '200': '#6b6b99',
        '300': '#8989ae',
        '400': '#7a7aa3',
        '500': '6b6b99',
        '600': '#60608b',
        '700': '#55557c',
        '800': '#4b4b6d',
        '900': '#989fad',
        'A100': '#c6c6d7',
        'A200': '#f7f7f7', 
        'A400': '#b3bbcb',
        'A700': '#ffffff'
    });

    $mdThemingProvider.theme('default')
      .primaryPalette('cstm_pallete');
  })
  .controller('AppController', AppController,'$rootScope');
