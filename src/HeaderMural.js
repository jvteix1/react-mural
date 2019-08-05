import React from 'react'
import { Container, Header, Left, Body, Right, Title } from 'native-base'
import {MaterialIcons} from '@expo/vector-icons'
import BodyMural from './BodyMural'

class HeaderMural extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <MaterialIcons name='add' size={25}/>
          </Left>
          <Body>
            <Title>M.U.R.AL</Title>
          </Body>
          <Right>
            <MaterialIcons name='exit-to-app' size={25}/>
          </Right>
        </Header>

        <BodyMural />
      </Container>
    )
  }
}

export default HeaderMural