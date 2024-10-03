import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { PropsStack } from "../../models";
import * as S from "./styles";
import Loading from "../Loading";

interface ModalProps{
  isVisible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  config: string;
  pomodoro?: any;
  shortBreak?: any;
  longBreak?: any;
}

export function ModalConfirmConfig({isVisible, setVisible, config, pomodoro, shortBreak, longBreak}: ModalProps) {

  const navigation = useNavigation<PropsStack>()
  
  const [loading, setLoading] = useState(false)

  async function confirmConfig(){
    setLoading(true)
    if(config === 'standart'){
      await AsyncStorage.setItem("config", config)
      navigation.navigate('Standard')
    } else {
      await AsyncStorage.setItem("config", config)
      await AsyncStorage.setItem("pomodoro", pomodoro)
      await AsyncStorage.setItem("shortBreak", shortBreak)
      await AsyncStorage.setItem("longBreak", longBreak)
       navigation.navigate('Standard', {
        pomodoro: pomodoro,
        shortBreak: shortBreak,
        longBreak: longBreak
      })
    }
    setLoading(false)
    setVisible(false)
  }

  function cancelConfig(){
     if(config === 'standart'){
      navigation.navigate('Standard')
    } else {
      navigation.navigate('Standard', {
        pomodoro: pomodoro,
        shortBreak: shortBreak,
        longBreak: longBreak
      })
    }
    setVisible(false)
  }

  return (
        <Modal
         isVisible={isVisible}
         onSwipeComplete = { ( )  =>  setVisible ( false ) }
         onBackdropPress = { ( )  =>  setVisible ( false ) } 
         style={{ margin: 0, justifyContent: 'flex-end' }}
         animationIn="bounceInUp"
         animationOut="slideOutDown"
         hideModalContentWhileAnimating
         animationInTiming={700}
         animationOutTiming={700}
         hardwareAccelerated
         swipeDirection="down"
          >
            <S.ContentModal>
              <S.ViewTextsModal>
                <S.TitleModal>Deseja tornar essa{'\n'}configuração como padrão?</S.TitleModal>
                <S.TextModal>Toda vez que entrar no aplicativo vai ser{'\n'}redirecionado para a tela de contagem.{'\n'}Depois terá como mudar caso queira.</S.TextModal>
                <S.Touchable transparent={false} onPress={() => confirmConfig()}>
                  {loading ? (
                    <Loading/>
                  ) : (
                    <S.TextTouchable transparent={false}>Confirmar</S.TextTouchable>
                  )}
                </S.Touchable>
                <S.Touchable style={{width: '100%'}} transparent={true} onPress={() => cancelConfig()}>
                  <S.TextTouchable transparent={true}>Cancelar</S.TextTouchable>
                </S.Touchable>
              </S.ViewTextsModal>
            </S.ContentModal>
        </Modal>
  )
}