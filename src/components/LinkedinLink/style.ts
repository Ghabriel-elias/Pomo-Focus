import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const CopyRight = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.text};
`