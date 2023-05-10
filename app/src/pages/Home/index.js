import React from "react";
import { Box, Button, Cover, GradientView, ProgressCircle, ScrollView, Spacer,Text,Title } from "../../components";
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
          </Box>      
     
      </GradientView>
    
    </ScrollView>

  );
};

export default Home;