import React from 'react';
import { FlatList } from 'react-native';

import {
  Box,
  Title,
  Spacer,
  Text,
  Button,
  Badge,
  ActivityIndicator,
} from '../../components';



const Balance = () => {
 
  const operationDict = {
    W: 'Saque Integral',
    G: 'Meta Concluida',
    L: 'Meta Incompleta',
    F: 'Depósito Iniciak',
  };

  return (
    <Box background="dark" hasPadding>
       <Spacer size="50px" />
          <Box height="120px">
            <Text>Seu Saldo Disponível</Text>
            <Spacer />
            <Title big color="light">
              R$ 50,00
            </Title>
          </Box>
          <Button block background="info">
            Sacar Saldo
          </Button>
          <Spacer size="50px" />
          <FlatList
            style={{
              width: '100%',
            }}
            data={[1,2,3,4,5,6]}
            keyExtractor={(item) => item.toString() + new Date().getTime()}
            renderItem={({ item, index }) => (
              <Box
                row
              
                align="center"
                 justify="space-between"
              >
                <Box row align="center">
                  <Box>
                    <Text color="light">Saque Integral</Text>
                    <Spacer  />
                    <Text small>
                    28/05/2023 as 22:00
                    </Text>
                  </Box>
                </Box>
                <Badge
                  color='danger'
                  
                >
                R$ -10,00
                </Badge>
              </Box>
            )}
          />
        {/* </> */}
      {/* // )} */}
    </Box>
  );
};

export default Balance;