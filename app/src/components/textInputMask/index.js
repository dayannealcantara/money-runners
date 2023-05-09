import React from "react";
import { TextInput } from "..";
import {TextInputMask} from "react-native-masked-text"

const TextInputMaskComponent = (inputProps) =>{
  return (
    <TextInput
    {...inputProps}
    render={(props) => <TextInputMask {...props}/>}
    />
  )
}

export default TextInputMaskComponent