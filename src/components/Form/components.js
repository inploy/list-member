import styled from '@emotion/native';
import {Text} from 'react-native';

export const Item = styled.View``;

export const Label = styled(Text)``;

export const ErrorMessage = styled(Text)`
  color: ${({theme}) => theme.colors.danger};
`;
