import React from "react";
import { TouchableOpacity, Linking } from "react-native";

import { CopyRight } from './style'

export function LinkedinLink() {
  return (
    <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/ghabriel-elias/')}>
      <CopyRight>Desevolvido por ©Ghabriel Elias</CopyRight>
    </TouchableOpacity>
  )
} 