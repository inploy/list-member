import React from 'react';
import {useDispatch} from 'react-redux';

import {InfoForm} from '../../components/InfoForm';
import {Container} from '../../components/Form';
import {setMembers} from '../../store/models/member';

const defaultValues = {
  name: '',
  citizenID: '',
  phone: '',
};

export default function CreateMemberPage({navigation}) {
  const dispatch = useDispatch();

  const onSubmit = values => {
    dispatch(setMembers(values));
    navigation.goBack();
  };

  return (
    <Container>
      <InfoForm
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        submitText="Submit"
      />
    </Container>
  );
}
