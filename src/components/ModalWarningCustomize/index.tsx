import React from 'react';
import Modal from "react-native-modal";

import * as S from './styles'

interface ModalProps{
  isVisible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalWarningCustomize({isVisible, setVisible}: ModalProps) {

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
                <S.TitleModal>Aviso!</S.TitleModal>
                <S.TextModal>Você só pode avançar para a próxma tela{'\n'}se os minutos forem diferentes de 0.</S.TextModal>
              </S.ViewTextsModal>
                <S.Touchable style={{width: '100%'}} onPress={() => setVisible(false)}>
                 <S.TextTouchableConfirm>Ok, entendi</S.TextTouchableConfirm>
               </S.Touchable>
            </S.ContentModal>
        </Modal>
  );
}