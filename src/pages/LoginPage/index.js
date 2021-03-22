import React, {useState} from 'react';
import {View, Text} from 'react-native';
import * as yup from 'yup';
import {Form, Input, SubmitButton} from '../../components/Form';

// import styles from './Counter.module.css';

export default function LoginPage() {
  const defaultValues = {
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <View>
      <Text>LoginPage</Text>
      <Form defaultValues={defaultValues} schema={schema} onSubmit={onSubmit}>
        <Input name="email" placeholderTextColor="white" />
        <Input name="password" white placeholderTextColor="white" />
        <SubmitButton fontSize={16} title="login" type="submit" />
      </Form>
    </View>
  );
}
