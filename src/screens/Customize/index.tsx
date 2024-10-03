import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { PropsStack } from '../../models';
import { SafeArea } from '../Standard/style';
import { LinkedinLink } from '../../components/LinkedinLink';
import * as S from './style'
import { ModalWarningCustomize } from '../../components/ModalWarningCustomize';
import { ModalConfirmConfig } from '../../components/ModalConfirmConfig';

export default function Customize({route}: any) {

  const navigation = useNavigation<PropsStack>()

  const [modalConfigConfirm, setModalConfigConfirm] = useState(false)

  const [pomodoroMinutes, setPomodoroMinutes]: any = useState('00')

  const [shorMinutes, setShorMinutes]: any = useState('00')

  const [longMinutes, setLongMinutes]: any = useState('00')

  function descrement(element: any) {
    if (element === 'pomodoroMinutes') {
      if (pomodoroMinutes <= 10 && pomodoroMinutes > 0) {
        const format = `0${parseFloat(pomodoroMinutes) - 1}`
        setPomodoroMinutes(format)
      } else if (pomodoroMinutes === '00' || pomodoroMinutes == 0) {
        setPomodoroMinutes('00')
      } else {
        setPomodoroMinutes(pomodoroMinutes - 1)
      }
    } else if (element === 'shorMinutes') {
      if (shorMinutes <= 10 && shorMinutes > 0) {
        const format = `0${parseFloat(shorMinutes) - 1}`
        setShorMinutes(format)
      } else if (shorMinutes === '00' || shorMinutes == 0) {
        setShorMinutes('00')
      } else {
        setShorMinutes(shorMinutes - 1)
      }
    } else if (element === 'longMinutes') {
      if (longMinutes <= 10 && longMinutes > 0) {
        const format = `0${parseFloat(longMinutes) - 1}`
        setLongMinutes(format)
      } else if (longMinutes === '00' || longMinutes == 0) {
        setLongMinutes('00')
      } else {
        setLongMinutes(longMinutes - 1)
      }
    }
  }

  function increment(element: any) {
    if (element == 'pomodoroMinutes') {
      if (pomodoroMinutes < 9) {
        const format = `0${parseFloat(pomodoroMinutes) + 1}`
        setPomodoroMinutes(format)
      } else if (pomodoroMinutes === 30) {
        setPomodoroMinutes(30)
      } else {
        setPomodoroMinutes(parseFloat(pomodoroMinutes) + 1)
      }

    } else if (element == 'shorMinutes') {
      if (shorMinutes < 9) {
        const format = `0${parseFloat(shorMinutes) + 1}`
        setShorMinutes(format)
      } else if (shorMinutes === 30) {
        setShorMinutes(30)
      } else {
        setShorMinutes(parseFloat(shorMinutes) + 1)
      }
    } else if (element == 'longMinutes') {
      if (longMinutes < 9) {
        const format = `0${parseFloat(longMinutes) + 1}`
        setLongMinutes(format)
      } else if (longMinutes === 30) {
        setLongMinutes(30)
      } else {
        setLongMinutes(parseFloat(longMinutes) + 1)
      }
    }
  }

  const [modalVisible, setModalVisible] = useState(false)

  function confirmMinutes(){
    if(pomodoroMinutes == 0 || shorMinutes == 0 || longMinutes == 0){
      setModalVisible(true)
    } else {
      setModalConfigConfirm(true)
    }
  }

  return (
    <SafeArea colorBg='pomodoro'>
       <ModalWarningCustomize isVisible={modalVisible} setVisible={setModalVisible}/>
       <ModalConfirmConfig pomodoro={pomodoroMinutes} shortBreak={shorMinutes} longBreak={longMinutes} isVisible={modalConfigConfirm} setVisible={setModalConfigConfirm} config={'customize'}/>
      <S.Container>
        <S.ViewMinutes>
          <S.MinutesCard>
            <S.Cards>{pomodoroMinutes}</S.Cards>
            <S.Cards>{shorMinutes}</S.Cards>
            <S.Cards>{longMinutes}</S.Cards>
          </S.MinutesCard>
          <S.MinutesCard>
            <S.IndicatorsMinute>Pomodoro</S.IndicatorsMinute>
            <S.IndicatorsMinute>Short Break</S.IndicatorsMinute>
            <S.IndicatorsMinute>Long Break</S.IndicatorsMinute>
          </S.MinutesCard>
        </S.ViewMinutes>
        <S.Minutes>
          <S.Title>Personalize</S.Title>
          <S.AreaCardsChangeMinute>
            <S.CardsChangeMinute>
              <S.TextIndicators>Pomodoro    </S.TextIndicators>
              <S.SpaceChangeMinute>
                <S.TouchableIncrementeDescrement onPress={() => descrement('pomodoroMinutes')}>
                  <S.TextTouchable>-</S.TextTouchable>
                </S.TouchableIncrementeDescrement>
                <S.Number>{pomodoroMinutes}</S.Number>
                <S.TouchableIncrementeDescrement onPress={() => increment('pomodoroMinutes')}>
                  <S.TextTouchable>+</S.TextTouchable>
                </S.TouchableIncrementeDescrement>
              </S.SpaceChangeMinute>
            </S.CardsChangeMinute>
            <S.CardsChangeMinute>
              <S.TextIndicators>Short Break</S.TextIndicators>
              <S.SpaceChangeMinute>
                <S.TouchableIncrementeDescrement onPress={() => descrement('shorMinutes')}>
                  <S.TextTouchable>-</S.TextTouchable>
                </S.TouchableIncrementeDescrement>
                <S.Number>{shorMinutes}</S.Number>
                <S.TouchableIncrementeDescrement onPress={() => increment('shorMinutes')}>
                  <S.TextTouchable>+</S.TextTouchable>
                </S.TouchableIncrementeDescrement>
              </S.SpaceChangeMinute>
            </S.CardsChangeMinute>
            <S.CardsChangeMinute>
              <S.TextIndicators>Long Break</S.TextIndicators>
              <S.SpaceChangeMinute>
                <S.TouchableIncrementeDescrement onPress={() => descrement('longMinutes')}>
                  <S.TextTouchable>-</S.TextTouchable>
                </S.TouchableIncrementeDescrement>
                <S.Number>{longMinutes}</S.Number>
                <S.TouchableIncrementeDescrement onPress={() => increment('longMinutes')}>
                  <S.TextTouchable>+</S.TextTouchable>
                </S.TouchableIncrementeDescrement>
              </S.SpaceChangeMinute>
            </S.CardsChangeMinute>
          </S.AreaCardsChangeMinute>
        </S.Minutes>
        <S.ButtonConfirm>
          <S.Touchable onPress={confirmMinutes}>
            <S.TextTouchableConfirm>Confirmar</S.TextTouchableConfirm>
          </S.Touchable>
          <LinkedinLink />
        </S.ButtonConfirm>
      </S.Container >
    </SafeArea>
  );
}