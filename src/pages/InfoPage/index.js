import React from 'react';
import {Text, Alert, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Card, Button, Icon} from 'react-native-elements';
import isEmpty from 'lodash/isEmpty';
import theme from '../../theme';
import {Container} from '../../components/Form';
import {Group} from '../../styles';
import {removeMembers} from '../../store/models/member';

export default function InfoPage({navigation}) {
  const {members} = useSelector(state => state.member);
  const dispatch = useDispatch();

  const handleAlert = (seletedName, index) =>
    Alert.alert('Confirmation', `Are you sure to delete ${seletedName}`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => confirmDelete(index)},
    ]);

  const confirmDelete = index => {
    dispatch(removeMembers({index}));
  };
  return (
    <Container>
      <ScrollView>
        {members.map((member, index) => (
          <Card
            containerStyle={{
              borderRadius: 10,
              marginBottom: 10,
              backgroundColor: theme.colors.primary,
              margin: 0,
            }}>
            <Group>
              <Icon
                name="pencil"
                type="font-awesome"
                color={theme.colors.white}
                onPress={() =>
                  navigation.navigate('Edit', {
                    memberDefault: member,
                    id: index,
                  })
                }
              />
              <Icon
                name="trash-o"
                type="font-awesome"
                color={theme.colors.danger}
                onPress={() => handleAlert(member.name, index)}
              />
            </Group>
            <Text>{member.name}</Text>
            <Text>{member.citizenID}</Text>
            <Text>{member.phone}</Text>
          </Card>
        ))}
        <Button
          icon={
            <Icon
              name="plus"
              type="font-awesome"
              color={theme.colors.primaryButton}
            />
          }
          buttonStyle={{borderColor: theme.colors.primaryButton}}
          type="outline"
          title={isEmpty(members) ? 'Add your first member' : 'Add member'}
          titleStyle={{color: theme.colors.primaryButton}}
          onPress={() => navigation.navigate('Create')}
        />
      </ScrollView>
    </Container>
  );
}
