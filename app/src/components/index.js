import styled from "styled-components/native";

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
`
