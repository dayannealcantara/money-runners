import React from 'react';
import { Alert } from 'react-native';



import {
  Box,
  Title,
  Text,
  Spacer,
  Button,
  Badge,
  ProgressCircle,
} from '../../components';




const Timer = () => {
   return (
    <Box background="dark" hasPadding justify="center" align="center">
        <Spacer size="50px" />
      <Text color="light">Tempo Restante</Text>
      <Spacer size="20px" />
      <Title big color="danger">
       20:00
      </Title>
      <Spacer size="50px" />

      <Title small color="muted">
      Dayanne, faltam
      </Title>
      <Spacer size="20px" />
      <Box justify="center" align="center" height="250px">
        <ProgressCircle
          progress={0.8}
          size="250px"
          color="danger"
          background="dark"
        />
        <Spacer size="100px"/>

        <Title big color="light" bold scale={1.7}>
         2.95
        </Title>
      </Box>
      <Spacer size="20px" />
      <Title small color="muted">
        Kilometros p/ meta.
      </Title>
      <Spacer size="50px" />

      <Badge big align="center">
        - R$ 20,00
      </Badge>
      <Spacer size="20px" />

      <Button block background="danger" onPress={() => navigate('Home')}>
        Desistir
      </Button>
    </Box>
  );
};

export default Timer;