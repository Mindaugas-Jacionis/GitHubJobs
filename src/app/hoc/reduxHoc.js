import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

function registerContainer(name, generator) {
  Navigation.registerComponent(name, generator);
}

export function reduxHoc(name, RenderComponent, store) {
  function generatorWrapper() {
    return class Scene extends React.Component {
      constructor(props) {
        super(props);
        this.child = undefined;
      }

      onNavigationButtonPressed(id) {
        const instance = this.child.getWrappedInstance();
        if (instance && instance.onNavigationButtonPressed) {
          instance.onNavigationButtonPressed(id);
        }
      }

      assignRef = component => {
        this.child = component;
        return this.child;
      };

      didAppear(id) {
        const instance = this.child.getWrappedInstance();
        if (instance && instance.didAppear) {
          instance.didAppear(id);
        }
      }

      didDisappear(id) {
        const instance = this.child.getWrappedInstance();
        if (instance && instance.didDisappear) {
          instance.didDisappear(id);
        }
      }

      render() {
        return (
          <Provider store={store}>
            <RenderComponent ref={this.assignRef} {...this.props} />
          </Provider>
        );
      }
    };
  }

  registerContainer(name, generatorWrapper);
}

export default reduxHoc;
