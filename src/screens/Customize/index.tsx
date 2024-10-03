import React from 'react';
import { SafeArea } from '../Standard/style';
import { LinkedinLink } from '../../components/LinkedinLink';
import * as S from './style'
import { ModalWarningCustomize } from '../../components/ModalWarningCustomize';
import { ModalConfirmConfig } from '../../components/ModalConfirmConfig';
import useCustomize from './controller';

export default function Customize({route}: any) {

  const {
    pomodoroMinutes,
    longMinutes,
    shorMinutes,
    setModalVisible,
    setModalConfigConfirm,
    modalVisible,
    modalConfigConfirm,
    descrement,
    confirmMinutes,
    increment
  } = useCustomize()

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