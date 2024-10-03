import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ColorsChange {
  colorBg: 'pomodoro' | 'short' | 'long' | string
}

interface BgTextChange {
  colorTextBg: 'desactive' | 'active' | string
}

export const SafeArea = styled(SafeAreaView) <ColorsChange>`
  flex: 1;
  ${(props => props.colorBg === 'pomodoro' && css`
    background-color: ${({ theme }) => theme.colors.pomodoro};
  `)}
  ${(props => props.colorBg === 'short' && css`
    background-color: ${({ theme }) => theme.colors.shortBreak};
  `)}
  ${(props => props.colorBg === 'long' && css`
    background-color: ${({ theme }) => theme.colors.longBreak};
  `)}
`

export const Container = styled.View<ColorsChange>`
  ${(props => props.colorBg === 'pomodoro' && css`
    background-color: ${({ theme }) => theme.colors.pomodoro};
  `)}
  ${(props => props.colorBg === 'short' && css`
    background-color: ${({ theme }) => theme.colors.shortBreak};
  `)}
  ${(props => props.colorBg === 'long' && css`
    background-color: ${({ theme }) => theme.colors.longBreak};
  `)}
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const AreaTexts = styled.View`
  flex: 0.1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Main = styled.View<ColorsChange>`
 ${(props => props.colorBg === 'pomodoro' && css`
    background-color: ${({ theme }) => theme.colors.pomodoroCont};
  `)}
  ${(props => props.colorBg === 'short' && css`
    background-color: ${({ theme }) => theme.colors.shortBrakCont};
  `)}
  ${(props => props.colorBg === 'long' && css`
    background-color: ${({ theme }) => theme.colors.longBreakCont};
  `)}
  margin-top: ${RFValue(20)}px;
  flex: 1;
  width: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Indicators = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px 10px;
`

export const IndicatorTouchble = styled.TouchableOpacity<BgTextChange>`
  ${(props => props.colorTextBg === 'active' && css`
   background-color: ${({ theme }) => theme.colors.backgroundTexts};
  `)}
  padding: 8px;
  margin-top: ${RFValue(20)}px;
  border-radius: 5px;
  `

export const Indicator = styled.Text<BgTextChange>`
  ${(props => props.colorTextBg === 'active' && css`
   font-family: ${({ theme }) => theme.fonts.Bold};
  `)}
  ${(props => props.colorTextBg === 'desactive' && css`
   font-family: ${({ theme }) => theme.fonts.regular};
   `)}
   font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
`

export const Cont = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.Bold};
  font-size: ${RFValue(53)}px;
  `

export const StartTouchble = styled.TouchableOpacity`
  margin-bottom: ${RFValue(25)}px;
  background-color: ${({ theme }) => theme.colors.text};
  padding: 5px;
  width: 70%;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  `

export const Start = styled.Text<ColorsChange>`
 ${(props => props.colorBg === 'pomodoro' && css`
    color: ${({ theme }) => theme.colors.pomodoro};
  `)}
  ${(props => props.colorBg === 'short' && css`
    color: ${({ theme }) => theme.colors.shortBreak};
  `)}
  ${(props => props.colorBg === 'long' && css`
    color: ${({ theme }) => theme.colors.longBreak};
  `)}
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(28)}px;
`

export const ViewFooterMain = styled.View`
 width: 100%;
 align-items: center;
 margin-bottom: ${RFValue(15)}px;
`

export const TextFooter = styled.Text`
 font-size: ${RFValue(16)}px;
 color: ${({ theme }) => theme.colors.text};
 font-family: ${({ theme }) => theme.fonts.semiBold};
`
