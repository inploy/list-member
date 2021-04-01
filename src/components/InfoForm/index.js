import React from 'react';
import {View} from 'react-native';
import * as yup from 'yup';

import {Form, Input, SubmitButton} from '../Form';
import {ButtonGroup} from '../../styles';

const phoneRegExp = /^0[0-9]{2}-[0-9]{3}-[0-9]{4}/g;
const idRegExp = /^[0-9]{1}-[0-9]{4}-[0-9]{5}-[0-9]{2}-[0-9]{1}/g;

const schema = yup.object().shape({
  name: yup.string().required(),
  citizenID: yup.string().required().matches(idRegExp, 'Invalid citizen ID'),
  phone: yup.string().required().matches(phoneRegExp, 'Invalid phone number'),
});

export function InfoForm({defaultValues, onSubmit, submitText}) {
  return (
    <View>
      <Form defaultValues={defaultValues} schema={schema} onSubmit={onSubmit}>
        <Input label="Name:" name="name" placeholder="NAME" mask={''} />
        <Input
          label="ID:"
          name="citizenID"
          placeholder="ID"
          mask={'[0]-[0000]-[00000]-[00]-[0]'}
        />
        <Input
          label="Phone:"
          name="phone"
          placeholder="PHONE NUMBER"
          mask={'[000]-[000]-[0000]'}
        />

        <ButtonGroup>
          <SubmitButton
            fontSize={16}
            title={submitText}
            type="submit"
            style={{width: 150}}
          />
        </ButtonGroup>
      </Form>
    </View>
  );
}
