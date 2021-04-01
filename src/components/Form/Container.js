import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Container = ({children, containerStyles}) => {
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          padding: 20,
        },
        containerStyles,
      ]}>
      {children}
    </SafeAreaView>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  containerStyles: PropTypes.object,
};

Container.defaultProps = {
  containerStyles: {
    flex: 1,
  },
};
