import React from "react";
import { ActivityIndicator, Box, Button, Cover, GradientView, ProgressCircle, ScrollView, Spacer,Text,Title, Touchable } from "../../components";
import { colors } from '../../assets/theme.json';


const Home = () => {
  return (   
    <ScrollView background="dark">
       <GradientView
        end={{ x: 0, y: 1 }}
        locations={[-0.5, 1]}
        colors={[colors.info, colors.primary]}
        hasPadding
      >        
        <Box justify="center" align="center" spacing="20px 0 0">
          <Box justify="center" align="center" spacing="20px 0 0">
          <ProgressCircle progress={0.5} progressColor/>
        <Cover
              width="110px"
              height="110px"
              circle
              source={{uri:"https://i.pinimg.com/236x/aa/b4/12/aab41233a7bdd8b03fed7daa318be243.jpg"}}
              // image={`${util.AWS.bucketURL}/user/${user?._id}.jpeg`}
            />            
            </Box>
            <Spacer size="30px"/>
           <Title color="light">Dayanne Alcantara</Title>
           <Spacer />
         <Text>eudayanne10@gmail.com</Text>
         <Touchable spacing="20px 0 0">
              <Box hasPadding background="success" radius>
                <Text color="dark">Saldo Conquistado</Text>
                <Spacer />
                <Title small color="light">
                  R$ 29,00
                </Title>
              </Box>
            </Touchable>
        </Box>    
        <Spacer size="30px"/>       
      </GradientView>  
      <Box hasPadding spacing="-50px 0 0">
      {/* <Box background="dark50" hasPadding radius="3px" align="center">
        <Spacer size="20px"/>
        <ActivityIndicator size="large"/>
        <Spacer size="20px"/>
      <Title color="light" small>Buscando Informações</Title>
      <Spacer/>
      <Text>Aguarde alguns instantes...</Text>
    </Box>  */}
     <Box background="dark50" hasPadding radius="3px" align="center">
      <Title color="light" small>Nenhum desafio encontrado</Title>
      <Spacer/>
      <Text>No momento não há desafios para fazer...</Text>
      <Spacer size="20px"/>
      <Button block background="success">Recarregar</Button>
    </Box> 
      </Box>
   
    </ScrollView>
   
    

  );
};

export default Home;