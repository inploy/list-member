import React, {useState} from 'react';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import {Form, Input, SubmitButton, Container} from '../../components/Form';
import {ButtonGroup} from '../../styles';
import {setIsAuth, setValues} from '../../store/models/user';

export default function LoginPage() {
  const dispatch = useDispatch();
  // const [isDisabled, setIsDisabled] = useState(true);

  const defaultValues = {
    citizenID: '',
    phone: '',
  };

  const schema = yup.object().shape({
    citizenID: yup
      .string()
      .required()
      .min(13, 'กรุณากรอก 13 หลัก')
      .max(13, 'สูงสุด 13 หลัก'),
    phone: yup
      .string()
      .required()
      .min(10, 'กรุณากรอก 10 หลัก')
      .max(10, 'สูงสุด 10 หลัก'),
  });

  const onSubmit = values => {
    dispatch(setValues(values));
    console.log(values);
    dispatch(setIsAuth(true));
  };

  return (
    <Container>
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
          <SubmitButton
            fontSize={16}
            title="Login"
            type="submit"
            // disable={isDisabled}
          />
        </ButtonGroup>
      </Form>
    </Container>
  );
}
