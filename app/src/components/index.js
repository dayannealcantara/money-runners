import styled from "styled-components/native";


import { ScrollView as ScrollViewComponent } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { ProgressCircle as ProgressCircleSVG } from 'react-native-svg-charts';

import { Title as TitlePaper, Text as TextPaper, Button as ButtonPaper, TextInput as TextInputPaper } from "react-native-paper";


 export const Box = styled.View`
    flex:1;
    flex-wrap: ${(props) => props.wrap || 'nowrap'};
    flex-direction: ${(props)=> (props.row ? 'row':'column')};
    flex-content: ${(props)=> props.justify || 'flex-start'};
    align-items: ${(props) => props.align || 'flex-start'};

    width:${(props) => props.width || '100%'};
    max-width:${(props) => props.width || '100%'};
    min-width:${(props) => props.width || '100%'};

    height:${(props) => props.height || 'auto'};
    max-height:${(props) => props.height || 'auto'};
    min-height:${(props) => props.height || 'auto'};

    padding:${(props) => (props.hasPadding ? '20px' : '0px')};
    margin:${(props) => props.spacing || 0};
    border-radius:${(props) => (props.radius ? '3px' : '0px')};
    border:${(props) => props.border || 'none'};

    background:${(props) => props.theme[props.background] || props.background ||'transparent'};
`;

export const Spacer = styled.View`
  width: 100%;
  height: ${(props) => props.size || '10px'};
`;

export const Title = styled(TitlePaper)`
  color: ${(props) => props.theme[props.color || 'dark']};
  font-size: ${(props) => (props.small ? '22px' : props.big ? '50px' : '30px')};
  padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
  letter-spacing: -0.8px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  line-height: ${(props) =>
    props.small ? '22px' : props.big ? '50px' : '30px'};
  text-align: ${(props) => props.align || 'left'};
  transform: ${(props) => (props.scale ? `scale(${props.scale})` : '')};
  font-family:"Ubuntu_700Bold";
`;

export const Cover = styled.ImageBackground.attrs((props) => ({
    resizeMode: props.mode || 'contain',
}))`
    width: ${(props) => props.width || '100px'};
    height: ${(props) => props.height || '100px'};
    max-height: ${(props) => props.height || '100px'};
    min-height: ${(props) => props.height || '100px'};
    margin: ${(props) => props.spacing || '0px'};
    border-radius: ${(props) => (props.circle ? props.width : '3px')};
    overflow:hidden;
` 
export const Text = styled(TextPaper)`
  color: ${(props) => props.theme[props.color || 'muted']};
  font-size: ${(props) => (props.small ? '13px' : '17px')};
  font-family: ${(props) =>
    props.bold ? 'Ubuntu_700Bold' : 'Ubuntu_300Light'};
  margin: ${(props) => props.spacing || 0};
  padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
  line-height: ${(props) => (props.small ? '13px' : '20px')};
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  opacity: 0.7;
  text-align: ${(props) => props.align || 'left'};
`;

export const Button = styled(ButtonPaper).attrs((props) => ({
    color:
      props.theme[props.background] || props.background || props.theme.primary,
    width: props.block ? '100%' : 'auto',
    labelStyle: {
      color: props.theme[props.textColor || 'light'],
      letterSpacing: 0,
      fontFamily: 'Ubuntu_300Light',
    },
    mode: 'contained',
  }))``;
  
export const TextInput = styled(TextInputPaper).attrs(({ theme }) => ({
    mode: 'outlined',
    outlineColor: theme.muted,
    underlineColor: theme.muted,
    selectionColor: theme.muted,
    theme: {
      colors: {
        text: theme.light,
        primary: theme.light,
        background: theme.dark,
        placeholder: theme.muted,
      },
    },
  }))`
    height: 45px;
    width: 100%;
    font-size: 15px;
  `;

export const ScrollView = styled(ScrollViewComponent)`
  width: 100%;
  background: ${(props) =>
    props.theme[props.background] || props.background || 'transparent'};
`;

export const GradientView = styled(LinearGradient)`
  flex: 1;
  padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'}
`;

export const ProgressCircle = styled(ProgressCircleSVG).attrs((props) => ({
  progressColor: props.theme[props.color] || props.theme.secondary,
 
}))`
  width: ${(props) => props.size || '120px'};
  height: ${(props) => props.size || '120px'};
  position: absolute;
`;