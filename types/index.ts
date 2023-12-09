import { StackNavigationProp } from '@react-navigation/stack';
export type RootStackParamList = {
    Home: undefined;
    Game: {
        title: string;
    };
    Result: {
        result:number
    };
    ScoreBoard: {
        userScore: number
    };

};
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type GameScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Game'>;
export type ResultScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Result'>;
export type ScoreBoardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ScoreBoard'>;