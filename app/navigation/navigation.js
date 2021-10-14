import {Navigation} from 'react-native-navigation';
import LoginScreen from '../components/standalone/login/index';
import SignupScreen from '../components/standalone/signup/index';

Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Signup', () => SignupScreen);
// Navigation.registerComponent('TabOne', () => TabOneScreen);
// Navigation.registerComponent('TabTwo', () => TabTwoScreen);

export const setLoginNav = () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'LoginStack',
        children: [
          {
            component: {
              name: 'Login',
            },
          },
        ],
      },
    },
  });
};

export const setAppNav = () => {
  // Navigation.setRoot({
  //   root: {
  //     sideMenu: {
  //       left: {
  //         component: {
  //           name: 'app.SideNav',
  //         },
  //       },
  //       center: {
  //         stack: {
  //           id: 'AppStack',
  //           children: [
  //             {
  //               bottomTabs: {
  //                 id: 'BottomTabs',
  //                 children: [
  //                   {
  //                     component: {
  //                       name: 'app.TabOne',
  //                       options: {
  //                         bottomTab: {
  //                           icon: require('../Assets/images/home.png'),
  //                         },
  //                       },
  //                     },
  //                   },
  //                   {
  //                     component: {
  //                       name: 'app.TabTwo',
  //                       options: {
  //                         bottomTab: {
  //                           icon: require('../Assets/images/profile.png'),
  //                         },
  //                       },
  //                     },
  //                   },
  //                 ],
  //               },
  //             },
  //           ],
  //         },
  //       },
  //       right: {
  //         component: {
  //           name: 'app.SideNav',
  //         },
  //       },
  //     },
  //   },
  // });
};
