import React from "react";
import { ActivityIndicator } from "react-native";
import theme from "../../global/styles/theme";

export default function Loading() {

  return (
   <ActivityIndicator size={50} color={theme.colors.text}/>
  )
}