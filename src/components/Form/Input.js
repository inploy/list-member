import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/native';
import {useFormContext, Controller} from 'react-hook-form';
import TextInputMask from 'react-native-text-input-mask';

import {Item, Label, ErrorMessage} from './components';

const ErrorBox = styled.View`
  position: ${props => props.errorInside && 'absolute'};
  bottom: ${props => props.errorInside && '5px'};
  padding: ${props => props.errorInside && '8px'};
`;

export const Input = ({
  name,
  line = false,
  label,
  style,
  itemStyle = {},
  defaultValue,
  placeholder,
  mask,
  errorInside = false,
  ...props
}) => {
  const {control, errors} = useFormContext();
  return (
    <Item style={{...itemStyle}}>
      {label && <Label>{label}</Label>}
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <>
            <Item style={itemStyle}>
              <TextInputMask
                onBlur={onBlur}
                mask={mask}
                placeholder={placeholder}
                onChangeText={value => {
                  onChange(value);
                }}
                value={value && value.toString()}
                defaultValue={defaultValue}
                style={style}
                {...props}
              />
            </Item>
            {errors[name] && (
              <ErrorBox errorInside={errorInside}>
                {errors[name].type === 'required' ? (
                  <ErrorMessage>* Required</ErrorMessage>
                ) : (
                  <ErrorMessage>{errors[name].message}</ErrorMessage>
                )}
              </ErrorBox>
            )}
          </>
        )}
        name={name}
      />
    </Item>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  line: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  mask: PropTypes.string,
  style: PropTypes.object,
  itemStyle: PropTypes.object,
  errorInside: PropTypes.bool,
  defaultValue: PropTypes.any,
};
