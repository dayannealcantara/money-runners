import React from "react";
import { ActivityIndicator, Badge, Box, Button, Cover, GradientView, ProgressCircle, ScrollView, Spacer,Text,Title, Touchable } from "../../components";
// import YoutubePlayer from 'react-native-youtube-iframe';
import { FlatList } from 'react-native-gesture-handler';
import { colors } from '../../assets/theme.json';
import { View } from 'react-native';


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
     {/* <Box background="dark50" hasPadding radius="3px" align="center">
      <Title color="light" small>Nenhum desafio encontrado</Title>
      <Spacer/>
      <Text>No momento não há desafios para fazer...</Text>
      <Spacer size="20px"/>
      <Button block background="success">Recarregar</Button>
    </Box>  */}
    {/* <>
     <Box background="dark50" hasPadding radius="3px" >
      <Title color="light" small>Correr 2km todos os dias às 5am durante 30 dias</Title>
      <Spacer/>
      <Text>Mantenha a constância correndo todos os dias para criar um novo hábito.</Text>
      <Spacer size="30px"/>
      <Text>O Desafio termina em 30/07/2023</Text>
      <Spacer size="20px"/>
      <Button block>Participar Agora</Button>
    </Box> 
    <Spacer size="30px"/>
     <Box background="dark50" hasPadding radius="3px" align="center">
      <Title color="light" small>Eae?! Vai encarar o desafio?</Title>
      <Spacer/>
      <YoutubePlayer
        height={180}
        width="100%"
        videoId="kChLOhc-nhs"
      />     
    </Box> 
    </> */}
     {/* <Box background="dark50" hasPadding radius="3px" >
     <Text>Quarta feira 19/04/2023</Text>
     <Spacer/>
      <Title color="light" small>Resultados de hoje.</Title>   
      <Spacer/>     
      <FlatList
      data={[1,2,3,4,5,6,7,8,9]}
      ListEmptyComponent={()=>(
        <Box align="center" spacing="20px 0 0">
          <Title color="light" small>Nenhum resultado...</Title>
          <Spacer />
          <Text align="center"color="light" >O seu desafio começa em <Text color="danger">algumas horas...</Text></Text>
          <Spacer size="20px"/>
          <Button block>Recarregar</Button>
        </Box>
      )}
      renderItem={({item})=>(
        <View style={{ height: 50 }}>
        <Box  
          row
          width="85%"
          align="center"  
          justify="space-between"               
         >
        <Box row align="center" >
          <Cover
            mode="cover"
            width="35px"
            height="35px"
            circle
            spacing="0 7px 0 0"
            source={{uri:"https://i.pinimg.com/236x/aa/b4/12/aab41233a7bdd8b03fed7daa318be243.jpg"}}
            />
            <Text color="light">Dayanne</Text>          
          </Box>
            <Badge
            color="success"
            spacing="5px 0 0"
          >       
          + R$50,00
          </Badge>        
          </Box>
        </View>
      )}
      />      
    </Box>  */}
     <Box background="dark50" hasPadding radius="3px" align="center">    
        <Badge align="center" color="success" spacing="5px 0 0" big>       
         + R$50,00
        </Badge>
        <Spacer size="20px"/>    
     <Text>Quarta-feira, 19/04/223</Text>
      <Spacer/>
     <Title color="light" small>Inicie seu compromisso</Title>
     <Spacer size="30px"/>    
     <Title big color="danger" scale={1.5}>25:00</Title>
     <Spacer size="30px"/>  
     <Button block>Iniciar agora</Button>
    </Box> 
   </Box>   
  </ScrollView>
  );
};

export default Home;