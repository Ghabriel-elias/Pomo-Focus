import React from "react";
import Modal from "react-native-modal";

import * as S from "./styles";

interface ModalProps{
  isVisible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalDescriptionConfigs({isVisible, setVisible} : ModalProps) {

  const texts = [
    {title: 'Padrão:', subtitle: 'Com a configuração padrão você vai ter ciclos comuns da pomodoro com 25 minutos de foco, 5 de intervalo curto e 15 de intervalo longo.'},
    {title: 'Personalizada:', subtitle: 'Com a configuração personalizada você vai ter ciclos comuns da pomodoro, porém poderá definir quantos minutos vai ter de foco, intervalo curto e intervalo longo. Mas com um limite de tempo de 30 minutos para cada.'}
]

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
                <S.TitleModal>Padrão</S.TitleModal>
                <S.TextModal>Com a configuração padrão você vai ter ciclos comuns da pomodoro com 25 minutos de foco, 5 de intervalo curto e 15 de intervalo longo.</S.TextModal>
              </S.ViewTextsModal>
              <S.ViewTextsModal >
                <S.TitleModal>Personalizada</S.TitleModal>
                <S.TextModal>Com a configuração personalizada você vai ter ciclos comuns da pomodoro, porém poderá definir quantos minutos vai ter de foco, intervalo curto e intervalo longo. Mas com um limite de tempo de 30 minutos para cada.</S.TextModal>
              </S.ViewTextsModal>
            </S.ContentModal>
        </Modal>
  )
}