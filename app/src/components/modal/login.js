import React, { createRef } from 'react'
import { Modalize } from 'react-native-modalize';
import { Box, Cover, Spacer, Title, TextInput, Button } from '../../components';

export const modalRef = createRef()

const ModalLogin = () =>{
  return(
    <Modalize adjustToContentHeight ref={modalRef}>
      <Box hasPadding background="dark">
        <Title color="light">Entre com seus dados</Title>
        <Spacer size="10px" />
        <TextInput
          label="E-mail"
          keyboardType="email-address"          
        />
        <Spacer />
        <TextInput      
          label="Senha"
          secureTextEntry
        />
        <Spacer size="10px" />
        <Button         
          block
          background="success"         
        >
          Fazer Login
        </Button>
      </Box>
    </Modalize>
  )
}
export default ModalLogin