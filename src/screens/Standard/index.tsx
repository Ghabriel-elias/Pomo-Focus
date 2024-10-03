import React, { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as S from './style'
import { LinkedinLink } from '../../components/LinkedinLink';
import { View , TouchableOpacity} from 'react-native';
import { ModalChangeConfig } from '../../components/ModalChangeConfig';

let timer: any

let ss = 0

let mm = 25

export default function Standard({ route }: any) {

  useEffect(() => {
    changeForPomodoro()
  }, [])

  const [BgColor, setBgColor] = useState('pomodoro')

  const [modalVisible, setModalVisible] = useState(false)

  const [pomodoroIndicator, setPomodoroIndicator] = useState('active')
  const [shortIndicator, setShortIndicator] = useState('desactive')
  const [longIndicator, setLongIndicator] = useState('desactive')

  const [textButton, setTextButton] = useState('Start')

  const [contagem, setContagem] = useState('25:00')

  const [cont, setCont] = useState(1)
  const [pomodoroForShort, setPomodoroForLong] = useState(1)

  function changeForPomodoro() {

    setBgColor('pomodoro')

    setPomodoroIndicator('active')
    setShortIndicator('desactive')
    setLongIndicator('desactive')

    clearInterval(timer)
    setTextButton('Start')
    ss = 0
    if (route.params?.pomodoro != undefined) {
      mm = Number(route.params?.pomodoro)
      setContagem(`${route.params?.pomodoro}:00`)
      return
    }
    mm = 25
    setContagem('25:00')
  }

  function changeForShort() {

    setBgColor('short')

    setShortIndicator('active')
    setPomodoroIndicator('desactive')
    setLongIndicator('desactive')

    clearInterval(timer)
    setTextButton('Start')
    ss = 0
    if (route.params?.shortBreak != undefined) {
      mm = Number(route.params?.shortBreak)
      setContagem(`${route.params?.shortBreak}:00`)
      return
    }
    mm = 5
    setContagem('05:00')
  }

  function changeForLong() {

    setBgColor('long')

    setLongIndicator('active')
    setPomodoroIndicator('desactive')
    setShortIndicator('desactive')

    clearInterval(timer)
    setTextButton('Start')

    ss = 0
    if (route.params?.longBreak != undefined) {
      mm = Number(route.params?.longBreak)
      setContagem(`${route.params?.longBreak}:00`)
      return
    }
    mm = 15
    setContagem('15:00')
  }

  function start() {
    if (textButton === 'Stop') {
      setTextButton('Start')
      clearInterval(timer)
      timer = null
    } else {
      timer = setInterval(() => {

        if (ss === 0) {
          ss = 60
          mm--
        }
        ss--

        if (mm === 0 && ss === 0) {
          setCont(cont + 1)
          if (cont === 7) {
            changeForLong()
            setCont(1)
            setPomodoroForLong(0)
          } else if (pomodoroForShort === 0 || pomodoroForShort === 2 || pomodoroForShort === 4 || pomodoroForShort === 6) {
            changeForPomodoro()
            setPomodoroForLong(pomodoroForShort + 1)
          } else if (pomodoroForShort == 1 || pomodoroForShort === 3 || pomodoroForShort === 5) {
            changeForShort()
            setPomodoroForLong(pomodoroForShort + 1)
          }
        }

        let format = (mm < 10 ? `0${mm}` : mm) + ":" + (ss < 10 ? `0${ss}` : ss)
        setContagem(format)
      }, 1000)
      setTextButton('Stop')
    }
  }

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