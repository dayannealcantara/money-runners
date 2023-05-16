import React, { useState } from 'react';

import { Box, Cover, Spacer, Title, Text, Button } from '../../components';

import tour01 from '../../assets/illustration-1.png'
import tour02 from '../../assets/illustration-2.png'
import tour03 from '../../assets/illustration-3.png'

import AsyncStorage from '@react-native-async-storage/async-storage';
import {replace} from '../../services/navigation'


const Tour = () => {
  const tourData = [
    {
      bg:'dark',
      button:'primary',
      title:'Chega de rotina sem a motivação.',
      desc:'Pensamos em  um serviço perfeito para você construir       hábitos se divertindo e ganhando dinheiro.',
      pic: tour01,
    },
    {
      bg:'info',
      button:'dark',
      title:'Construa hábitos por bem (ou mal).',
      desc:'Pensamos em  um serviço perfeito para você construir     hábitos se divertindo e ganhando dinheiro.',
      pic: tour02,
    },
    {
      bg:'dark',
      button:'primary',
      title:'Ganhe dinheiro com os seus amigos.',
      desc:'Pensamos em  um serviço perfeito para você construir       hábitos se divertindo e ganhando dinheiro.',
      pic: tour03,
    },
  ];

  const [actualTour, setActualTour] = useState(0)

  const goToLogin = async () => {
    await AsyncStorage.setItem('@tour', 'Y')
    replace('Login')
  }
  
  return (
    <Box background={tourData[actualTour]?.bg} hasPadding justify="center">
      <Spacer size="40px"/>
      <Title big color="light">{tourData[actualTour]?.title}</Title> 
      <Spacer size="50px"/> 
      <Cover source={tourData[actualTour]?.pic} width="100%" height="300px" /> 
      <Spacer size="50px"/> 
      <Text align="center" small hasPadding>{tourData[actualTour]?.desc}</Text>
      <Spacer size="50px"/> 
      <Button block background={tourData[actualTour]?.button} 
      onPress={()=> {
        if(actualTour === 2) {
          goToLogin()
        } else {
          setActualTour(actualTour + 1)
        }
      }}>{actualTour === 2 ? 'Explorar' : 'Próximo'}</Button>
    
    </Box>
  );
};

export default Tour


