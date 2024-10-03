import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.pomodoro};
`

export const ContentModal = styled.View`
  background-color: ${({ theme }) => theme.colors.text};
  width: 100%;
  padding: 40px 20px 40px 20px;
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


export const ViewMinutes = styled.View`
  flex: 0.5;
  align-items: center;
  justify-content: center;
`

export const Minutes = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ButtonConfirm = styled.View`
  flex: 0.5;
  align-items: center;
  justify-content: space-around;
`

export const MinutesCard = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const Cards = styled.Text`
  background-color: ${({ theme }) => theme.colors.pomodoroCont};
  font-size: ${RFValue(50)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.Bold};
  padding: ${RFValue(5)}px ${RFValue(0)}px;
  border-radius: ${RFValue(5)}px;
  width: 30%;
  text-align: center;
`

export const IndicatorsMinute = styled.Text`
  background-color: ${({ theme }) => theme.colors.backgroundTexts};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  width: 30%;
  height: ${RFValue(23)}px;
  text-align: center;
  margin-top: ${RFValue(7)}px;
  border-radius: ${RFValue(5)}px;
`

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.semiBold};
`

export const AreaCardsChangeMinute = styled.View`
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex: 1;
`

export const CardsChangeMinute = styled.View`
  background-color: ${({ theme }) => theme.colors.pomodoroCont};
  height: ${RFValue(70)}px;
  width: 85%;
  border-radius: ${RFValue(5)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const TextIndicators = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.semiBold};
`

export const SpaceChangeMinute = styled.View`
  background-color: ${({ theme }) => theme.colors.pomodoro};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 40%;
  /* margin-right: 20px; */
`

export const Number = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.Bold};
  text-align: center;
  /* width: 45%; */
`

export const TouchableIncrementeDescrement = styled.TouchableOpacity`
  /* background-color: ${({ theme }) => theme.colors.pomodoro}; */
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  /* border-radius: ${RFValue(25)}px; */
  height: ${RFValue(35)}px;
  width: ${RFValue(25)}px;
  align-items: center;
  justify-content: center;
`

export const TextTouchable = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.Bold};
`

export const Touchable = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.text};
  width: 70%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

export const TextTouchableConfirm = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.pomodoro};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  padding: ${RFValue(5)}px ${RFValue(0)}px;
`