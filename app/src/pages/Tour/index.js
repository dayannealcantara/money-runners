import React from 'react';

import { Box, Cover, Spacer, Title, Text, Button } from '../../components';

import tour01 from '../../assets/illustration-1.png'

const Tour = () => {
  
  return (
    <Box background="dark" hasPadding justify="center">
      <Spacer size="40px"/>
      <Title big color="light">Chega de rotina sem motivação.</Title> 
      <Spacer size="50px"/> 
      <Cover source={tour01} width="100%" height="300px" /> 
      <Spacer size="50px"/> 
      <Text align="center" small hasPadding>Pensamos em  um serviço perfeito para você construir hábitos se divertindo e ganhando dinheiro.</Text>
      <Spacer size="50px"/> 
      <Button >Próximo</Button>
    
    </Box>
  );
};

export default Tour


