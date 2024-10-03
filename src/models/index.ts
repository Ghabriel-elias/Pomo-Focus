import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
  Home: undefined
  Standard?: {
    pomodoro: string,
    shortBreak: string,
    longBreak: string
  }
  Customize?: {
    config: string;
  }
}

export type PropsStack = NativeStackNavigationProp<propsNavigationStack>