import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const ContentModal = styled.View`
  background-color: ${({ theme }) => theme.colors.text};
  width: 100%;
  padding: 40px 20px 40px 20px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`

export const ViewTextsModal = styled.View`
  width: 100%;
  padding-bottom: ${RFValue(20)}PX;
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

export const Touchable = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.pomodoro};
  width: 70%;
  justify-content: center;
  height:  ${RFValue(49)}px;
  align-items: center;
  border-radius: 10px;
`

export const TextTouchableConfirm = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.semiBold};
`