import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface Button{
  transparent: true | false
}

export const ContentModal = styled.View`
  background-color: ${({ theme }) => theme.colors.text};
  width: 100%;
  padding: 20px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`

export const ViewTextsModal = styled.View`
  width: 100%;
`

export const TitleModal = styled.Text`
  text-align: center;
  padding-bottom: 20px;
  color: ${({ theme }) => theme.colors.backgroundModal};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.Bold};
`

export const TextModal = styled.Text`
  padding-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.backgroundModal};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
`

export const Touchable = styled.TouchableOpacity<Button>`

  ${(props => props.transparent === false && css`
    background-color: ${({ theme }) => theme.colors.pomodoro};
    width: 100%;
  `)}
  ${(props => props.transparent === true && css`
    background-color: ${({ theme }) => theme.colors.text};
    width: 70%;
  `)}
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(15)}px;
  border-radius: 10px;
`

export const TextTouchable = styled.Text<Button>`
 ${(props => props.transparent === false && css`
   color: ${({ theme }) => theme.colors.text};
  `)}
  ${(props => props.transparent === true && css`
    color: ${({ theme }) => theme.colors.pomodoro};
  `)}
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  padding: ${RFValue(5)}px ${RFValue(0)}px;
`