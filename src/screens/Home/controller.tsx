import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native"
import { PropsStack } from "../../models"
import { useEffect, useState } from "react"

export const useHomeController = () => {
    
    async function takeConfig() {
        const config = await AsyncStorage.getItem("config")
        if(config === 'standart'){
            navigation.navigate('Standard')
        } else if(config === 'customize'){
            const pomodoro = await AsyncStorage.getItem("pomodoro")
            const shortBreak = await AsyncStorage.getItem("shortBreak")
            const longBreak = await AsyncStorage.getItem("longBreak")
            navigation.navigate('Standard', {
            pomodoro: pomodoro,
            shortBreak: shortBreak,
            longBreak: longBreak
            })
        }
    }

    const navigation = useNavigation<PropsStack>()

    const [modalVisible, setModalVisible] = useState(false)
    
    const [modalConfigConfirm, setModalConfigConfirm] = useState(false)

    function showModal() {
        setModalVisible(true)
    }

    function standarConfig(){
        setModalConfigConfirm(true)
    }

    function customizeConfig(){
        navigation.navigate('Customize')
    }

    useEffect(() => {
        takeConfig()
    }, [])
    
    return {
        modalConfigConfirm,
        modalVisible,
        standarConfig,
        customizeConfig,
        showModal,
        setModalVisible,
        setModalConfigConfirm
    }
}