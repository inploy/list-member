import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import {useFormContext} from 'react-hook-form';
import {Item} from './components';
import {Button} from 'react-native';

export const SubmitButton = ({
  title,
  style,
  fontSize,
  disabled = false,
  modal = false,
  ...rest
}) => {
  const {handleSubmit, onSubmit, reset, errors} = useFormContext();

  return (
    <Item>
      <Button
        style={{...style}}
        title={title}
        onPress={handleSubmit((data, e) => onSubmit(data, e, reset))}
        fontSize={fontSize}
        disabled={!isEmpty(errors)}
        modal={modal}
        {...rest}
      />
    </Item>
  );
};

SubmitButton.propTypes = {
  title: PropTypes.string,
  disable: PropTypes.bool,
  modal: PropTypes.bool,
  style: PropTypes.object,
  fontSize: PropTypes.string,
};
