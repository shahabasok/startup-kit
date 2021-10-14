// import {Navigation} from 'react-native-navigation';
// import SplashScreen from './app/components/standalone/splash/';

// Navigation.registerComponent('Splash', () => SplashScreen);

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: 'Splash',
//               options: {
//                 topBar: {
//                   visible: false,
//                 },
//               },
//             },
//           },
//         ],
//       },
//     },
//   });
// });

import {Navigation} from 'react-native-navigation';
import app from './app/index';

Navigation.events().registerAppLaunchedListener(() => {
  app();
});
