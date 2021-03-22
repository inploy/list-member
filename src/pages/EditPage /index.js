import React, {useState} from 'react';
import {View, Button} from 'react-native';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import {Form, Input, SubmitButton} from '../../components/Form';
import {ButtonGroup} from '../../styles';
import {setValues} from '../../store/models/user';

export default function EditPage({navigation}) {
  const dispatch = useDispatch();
  const {citizenID, phone} = useSelector(state => state.user);

  const defaultValues = {
    citizenID: citizenID,
    phone: phone,
  };

  const schema = yup.object().shape({
    citizenID: yup
      .string()
      .required()
      .min(13, 'กรุณากรอก 13 หลัก')
      .max(13, 'กรุณากรอก 13 หลัก'),
    phone: yup
      .string()
      .required()
      .min(10, 'กรุณากรอก 10 หลัก')
      .max(10, 'กรุณากรอก 10 หลัก'),
  });

  const onSubmit = values => {
    dispatch(setValues(values));
    navigation.navigate('Info');
  };

  return (
    <View>
      <Form defaultValues={defaultValues} schema={schema} onSubmit={onSubmit}>
        <Input
          label="ID:"
          name="citizenID"
          placeholder="x-xxxx-xxxxx-xx-x"
          mask="citizenID"
        />
        <Input
          label="Phone:"
          name="phone"
          placeholder="xxx-xxxxxxx"
          mask="phone"
        />
        <ButtonGroup>
          <SubmitButton fontSize={16} title="Save" type="submit" />
          <Button title="Cancel" onPress={() => navigation.navigate('Info')} />
        </ButtonGroup>
      </Form>
    </View>
  );
}
