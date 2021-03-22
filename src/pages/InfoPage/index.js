import React from 'react';
import {Text, Button} from 'react-native';
import {useSelector} from 'react-redux';
import {Container} from '../../components/Form';
import {Group, ButtonGroup} from '../../styles';

export default function InfoPage({navigation}) {
  const {citizenID, phone} = useSelector(state => state.user);

  return (
    <Container>
      <Group>
        <Text>ID:</Text>
        <Text>{citizenID}</Text>
      </Group>
      <Group>
        <Text>Phone:</Text>
        <Text>{phone}</Text>
      </Group>
      <ButtonGroup>
        <Button title="Edit" onPress={() => navigation.navigate('Edit')} />
      </ButtonGroup>
    </Container>
  );
}
