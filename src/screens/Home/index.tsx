import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { PropsStack } from "../../models";
import { SafeArea } from "../Standard/style";
import { LinkedinLink } from "../../components/LinkedinLink";
import * as S from "./styles";
import { ModalDescriptionConfigs } from "../../components/ModalDescriptionConfigs";
import { ModalConfirmConfig } from "../../components/ModalConfirmConfig";
import { useHomeController } from "./controller";

export default function ChooseConfig() {

  const {
    modalConfigConfirm,
    modalVisible,
    standarConfig,
    customizeConfig,
    showModal,
    setModalVisible,
    setModalConfigConfirm
  } = useHomeController()
  
  return (
    <SafeArea colorBg='pomodoro'>
      <ModalDescriptionConfigs isVisible={modalVisible} setVisible={setModalVisible}/>
        <ModalConfirmConfig isVisible={modalConfigConfirm} setVisible={setModalConfigConfirm} config={'standart'}/>
      <S.Container>
        <S.WelcomeTexts>
          <S.Title>Seja bem vindo ao Pomo Focus</S.Title>
          <S.Texts>Antes de iniciarmos de fato, preciso que você defina qual configuração a ser utilizada</S.Texts>
        </S.WelcomeTexts>
        <S.Main>
          <S.Touchable onPress={() => standarConfig()}>
            <S.TextTouchable>Padrão</S.TextTouchable>
          </S.Touchable>
          <S.Touchable onPress={() => customizeConfig()}>
              <S.TextTouchable>Personalizada</S.TextTouchable>
          </S.Touchable>
        </S.Main>
        <S.ViewModal>
          <TouchableOpacity onPress={() => showModal()}>
            <S.TextFooter>Como funciona?</S.TextFooter>
          </TouchableOpacity>
        </S.ViewModal>
        <S.ViewCopy>
          <LinkedinLink />
        </S.ViewCopy>
      </S.Container>
    </SafeArea>
  )
}