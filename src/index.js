import { Navigation } from 'react-native-navigation';

import { NAVIGATION } from './constants';
import { registerScreens } from './app/screens';
import store from './app/state';

// if (Platform.OS === 'android') {
//   alert = (title) => {
//     Navigation.showOverlay({
//       component: {
//         name: 'navigation.playground.alert',
//         passProps: {
//           title
//         },
//         options: {
//           overlay: {
//             interceptTouchOutside: true
//           }
//         }
//       }
//     });
//   };
// }

export const start = () => {
  registerScreens(store);
  Navigation.events().registerAppLaunchedListener(() => {
    // Navigation.setDefaultOptions({
    //   _animations: {
    //     startApp: {
    //       y: {
    //         from: 1000,
    //         to: 0,
    //         duration: 500,
    //         interpolation: 'accelerate',
    //       },
    //       alpha: {
    //         from: 0,
    //         to: 1,
    //         duration: 500,
    //         interpolation: 'accelerate'
    //       }
    //     },
    //     push: {
    //       topBar: {
    //         id: 'TEST',
    //         alpha: {
    //           from: 0,
    //           to: 1,
    //           duration: 500,
    //           interpolation: 'accelerate'
    //         }
    //       },
    //       bottomTabs: {
    //         y: {
    //           from: 1000,
    //           to: 0,
    //           duration: 500,
    //           interpolation: 'decelerate',
    //         },
    //         alpha: {
    //           from: 0,
    //           to: 1,
    //           duration: 500,
    //           interpolation: 'decelerate'
    //         }
    //       },
    //       content: {
    //         y: {
    //           from: 1000,
    //           to: 0,
    //           duration: 500,
    //           interpolation: 'accelerate',
    //         },
    //         alpha: {
    //           from: 0,
    //           to: 1,
    //           duration: 500,
    //           interpolation: 'accelerate'
    //         }
    //       }
    //     },
    //     pop: {
    //       topBar: {
    //         id: 'TEST',
    //         alpha: {
    //           from: 1,
    //           to: 0,
    //           duration: 500,
    //           interpolation: 'accelerate'
    //         }
    //       },
    //       bottomTabs: {
    //         y: {
    //           from: 0,
    //           to: 100,
    //           duration: 500,
    //           interpolation: 'accelerate',
    //         },
    //         alpha: {
    //           from: 1,
    //           to: 0,
    //           duration: 500,
    //           interpolation: 'accelerate'
    //         }
    //       },
    //       bottomTabs: {
    //         y: {
    //           from: 0,
    //           to: 100,
    //           duration: 500,
    //           interpolation: 'decelerate',
    //         },
    //         alpha: {
    //           from: 1,
    //           to: 0,
    //           duration: 500,
    //           interpolation: 'decelerate'
    //         }
    //       },
    //       content: {
    //         y: {
    //           from: 0,
    //           to: 1000,
    //           duration: 500,
    //           interpolation: 'decelerate',
    //         },
    //         alpha: {
    //           from: 1,
    //           to: 0,
    //           duration: 500,
    //           interpolation: 'decelerate'
    //         }
    //       }
    //     }
    //   }
    // });

    Navigation.setRoot({
      root: {
        stack: {
          id: 'TestScreen',
          children: [
            {
              component: {
                name: `${NAVIGATION}.TestScreen`,
              },
            },
          ],
        },
      },
    });
  });
};
