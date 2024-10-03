import React from 'react';
import * as S from './style'
import { LinkedinLink } from '../../components/LinkedinLink';
import { TouchableOpacity} from 'react-native';
import { ModalChangeConfig } from '../../components/ModalChangeConfig';
import { useStandardController } from './controller';

export default function Standard() {

  const {
    BgColor,
    modalVisible,
    setModalVisible,
    pomodoroIndicator,
    changeForShort,
    changeForPomodoro,
    contagem,
    start,
    textButton,
    shortIndicator,
    longIndicator,
    changeForLong
  } = useStandardController()

  return (
    <S.SafeArea colorBg={BgColor}>
      <ModalChangeConfig isVisible={modalVisible} setVisible={setModalVisible}/>
      <S.Container colorBg={BgColor}>
        <S.Main colorBg={BgColor}>
          <S.Indicators>
            <S.IndicatorTouchble onPress={changeForPomodoro} colorTextBg={pomodoroIndicator}>
              <S.Indicator colorTextBg={pomodoroIndicator}>Pomodoro</S.Indicator>
            </S.IndicatorTouchble>
            <S.IndicatorTouchble onPress={changeForShort} colorTextBg={shortIndicator}>
              <S.Indicator colorTextBg={shortIndicator}>Short Break</S.Indicator>
            </S.IndicatorTouchble>
            <S.IndicatorTouchble onPress={changeForLong} colorTextBg={longIndicator}>
              <S.Indicator colorTextBg={longIndicator}>Long Break</S.Indicator>
            </S.IndicatorTouchble>
          </S.Indicators>
          <S.Cont>{contagem}</S.Cont>
         <S.ViewFooterMain>
         <S.StartTouchble onPress={start}>
            <S.Start colorBg={BgColor}>{textButton}</S.Start>
          </S.StartTouchble>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <S.TextFooter>Mudar configuração</S.TextFooter>
          </TouchableOpacity>
         </S.ViewFooterMain>
        </S.Main>
        <S.AreaTexts>
          <LinkedinLink />
        </S.AreaTexts>
      </S.Container >
    </S.SafeArea >
  );
}