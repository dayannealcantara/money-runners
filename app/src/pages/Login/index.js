import React from 'react';

import { Box, Cover, Spacer, Title, Text, Button } from '../../components';
import logo from "../../assets/logo.png"


const Login = () => {   
  return (
    <Box background="dark" hasPadding  align="center">
       <Spacer size="150px"/>
      <Cover source={logo} width="80%" height="300px"/>
      <Spacer size="80px"/>
      <Button block>Entrar na minha conta</Button>
      <Spacer/>
      <Button  mode='text' block>Pedir convite</Button>
      <Spacer size="50px"/>
      <Text small hasPadding align="center">Ao fazer login você concorda com nossos <Text small color="info">termos  e condições</Text>  e <Text small color="info">política de privacidade.</Text></Text>     
    </Box>
  );
};

export default Login


