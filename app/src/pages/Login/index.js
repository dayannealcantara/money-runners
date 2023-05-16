import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalLogin, {modalRef as modalLoginRef} from '../../components/modal/login';
import ModalInvite, {modalRef as modalInviteRef} from '../../components/modal/invite';
import { Box, Cover, Spacer, Text, Button, ActivityIndicator } from '../../components';
import logo from "../../assets/logo.png"
import { replace } from '../../services/navigation';


const Login = () => {  
  const [loggedState, setLoggedState] = useState(false);

  const getLoggedState = async () => {
    // await AsyncStorage.clear();
    const user = await AsyncStorage.getItem('@user');
    const tour = await AsyncStorage.getItem('@tour');

    if (!tour) {
      replace('Tour');
      return false;
    }

    if (!user) {
      setLoggedState(true);
    } else {
      dispatch(setReducer('user', JSON.parse(user)));
      replace('Home');
    }
  };

  useEffect(() => {
    getLoggedState();
  }, []);

  return (
    <>
    <ModalLogin/>
    <ModalInvite/>
      <Box background="dark" hasPadding  align="center">
        <Spacer size="150px"/>
        <Cover source={logo} width="80%" height="300px"/>
        <Spacer size="80px"/>

        {!loggedState && <ActivityIndicator color="info" size="large" />}
        {loggedState && (
        <>
          <Button block onPress={() => modalLoginRef.current?.open()}>Entrar na minha conta</Button>
          <Spacer/>
          <Button  mode='text' block onPress={() => modalInviteRef.current?.open()}>Pedir convite</Button>
          <Spacer size="50px"/>
          <Text small hasPadding align="center">Ao fazer login você concorda com nossos <Text small color="info">termos  e condições</Text>  e <Text small color="info">política de privacidade.</Text></Text>  
          </>
        )}   
      </Box>
    </>
  );
};

export default Login


