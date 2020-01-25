import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, HeaderEnd } from './styles';

function HomeHeader() {
  return (
    <Container>
      <Title>WhatsApp</Title>
      <HeaderEnd>
        <Icon name="search" color="#fff" size={26} />
        <Icon name="more-vert" color="#fff" size={26} />
      </HeaderEnd>
    </Container>
  );
}

export default HomeHeader;
