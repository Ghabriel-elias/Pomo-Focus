import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { PropsStack } from "../../models";
import * as S from "./styles";

interface ModalProps{
  isVisible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  config?: string;
}

export function ModalChangeConfig({isVisible, setVisible, config}: ModalProps) {

  const navigation = useNavigation<PropsStack>()

  async function changeConfig(){
    await AsyncStorage.setItem("config", '')
    await AsyncStorage.setItem("pomodoro", '')
    await AsyncStorage.setItem("shortBreak", '')
    await AsyncStorage.setItem("longBreak", '')

    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    })
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
                <S.TitleModal>Deseja mudar{'\n'}de configuração?</S.TitleModal>
                <S.TextModal>Sua configuração atual será deletada{'\n'}e poderá escolher uma nova.</S.TextModal>
                <S.Touchable transparent={false} onPress={() => setVisible(false)}>
                  <S.TextTouchable transparent={false}>Cancelar</S.TextTouchable>
                </S.Touchable>
                <S.Touchable style={{width: '100%'}} transparent={true} onPress={() => changeConfig()}>
                  <S.TextTouchable transparent={true}>Continuar</S.TextTouchable>
                </S.Touchable>
              </S.ViewTextsModal>
            </S.ContentModal>
        </Modal>
  )
}