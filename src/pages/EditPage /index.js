import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

import {InfoForm} from '../../components/InfoForm';
import {Container} from '../../components/Form';
import {editMembers} from '../../store/models/member';

export default function EditMemberPage() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    params: {memberDefault, id},
  } = useRoute();

  const onSubmit = values => {
    dispatch(editMembers({member: values, id}));
    navigation.goBack();
  };

  return (
    <Container>
      <InfoForm
        defaultValues={memberDefault}
        onSubmit={onSubmit}
        submitText="Edit"
      />
    </Container>
  );
}
