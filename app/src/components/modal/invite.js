import React, { createRef } from 'react'
import { Modalize } from 'react-native-modalize';
import { Box, Spacer, Title, TextInput, Button } from '../../components';
import TextInputMaskComponent from '../textInputMask';

export const modalRef = createRef()

const ModalInvite = () =>{
  return(
    <Modalize adjustToContentHeight ref={modalRef}>
    <Box hasPadding background="dark">
      <Title color="light">Entre com seus dados</Title>
      <Spacer size="10px" />     
      <TextInput
        label="Seu Nome"       
      />
      <Spacer />
      <TextInput
        label="E-mail"
        keyboardType="email-address"      
      />
      <Spacer />
      <TextInputMaskComponent
          label="CPF"
          type={'cpf'}         
        />
        <Spacer />
        <TextInputMaskComponent
          label="Data de Nascimento"
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY',
          }}         
        />
         <Spacer />
        <TextInputMaskComponent
          label="Telefone"
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
          }}       
        />
         <Spacer />
      <TextInput       
        label="Senha"
        secureTextEntry
      />
      <Spacer />
      <TextInput       
        label="Confirme a senha"
        secureTextEntry
      />
      <Spacer size="10px" />
      <Button      
        block
        background="success"       
      >
        Pedir Convite
      </Button>
    </Box>
  </Modalize>
  )
}
export default ModalInvite