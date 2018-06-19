import React from 'react';
import { Linking, SafeAreaView, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

export function reduxHoc(
  name,
  RenderComponent,
  store,
) {
  const generatorWrapper = function() {
    return class Scene extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return (
          <Provider store={store}>
            <RenderComponent
              ref="child"
              {...this.props}
            />
          </Provider>
        );
      }

      didAppear(id) {
        instance = this.refs.child.getWrappedInstance();
        if (instance && instance.didAppear) {
          instance.didAppear(id);
        }
      }

      didDisappear(id) {
        instance = this.refs.child.getWrappedInstance();
        if (instance && instance.didDisappear) {
          instance.didDisappear(id);
        }
      }

      onNavigationButtonPressed(id) {
        instance = this.refs.child.getWrappedInstance();
        if (instance && instance.onNavigationButtonPressed) {
          instance.onNavigationButtonPressed(id);
        }
      }
    };
  };

  registerContainer(name, generatorWrapper);
}

function registerContainer(name, generator) {
  Navigation.registerComponent(name, generator);
}

export default reduxHoc;
