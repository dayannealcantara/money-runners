import React from 'react';
import { FlatList } from 'react-native';

import {
  Box,
  Title,
  Text,
  Spacer,
  Cover,
  ProgressBar,
 
} from '../../components';


const Ranking = () => {
 return (
  <Box background="dark" hasPadding>
  <Box height="90px">
    <Spacer size="50px" />
    <Title color="light" big>
      Ranking
    </Title>
  </Box> 
         
  <Box width="100%" height="140px" spacing="20px 0" row align="center">
            <Box hasPadding width="140px" background="success" radius>
              <Text color="dark">Saldo Extra</Text>
              <Spacer />
              <Title small color="light">
                R$ 10,00
              </Title>
            </Box>
            <Box spacing="0 0 0 20px">
              <Text color="light">
                Status 
              </Text>
              <Spacer />
              <ProgressBar width="100%" progress={0.7} />
              <Spacer />
              <Text small>               
                Termina em
              </Text>
            </Box>
          </Box>
          <Box>
            <FlatList
              style={{
                width: '100%',
              }}
              data={[1,2,3,4,5,6,7,8,9]}
              keyExtractor={(item) => item.toString() + new Date().getTime()}
              renderItem={({ item, index }) => (
                <Box
                  row
                  width="100%"
                  height="50px"
                  align="center"
                  spacing="0 0 5px 0"
                  justify="space-between"
                >
                  <Box row align="center">
                    <Text color="light">{index + 1}º</Text>
                    <Cover
                      width="35px"
                      height="35px"
                      circle
                      spacing="0 7px"
                      source={{uri:"https://i.pinimg.com/236x/aa/b4/12/aab41233a7bdd8b03fed7daa318be243.jpg"}}
                    />
                    <Box>
                      <Text color="light">Nome</Text>
                      <Spacer size="2px" />
                      <Text small>
                       Perfomance
                      </Text>
                    </Box>
                  </Box>

                  <ProgressBar
                    width="100%" progress={0.7}
                  />
                </Box>
              )}
            />
          </Box>
      </Box>
)};

export default Ranking;