import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ResultScreenNavigationProp, RootStackParamList } from '../types';
import { AppScreen } from '../enums/screens';

export default function Result() {
    const navigation = useNavigation<ResultScreenNavigationProp>();
    const { params } = useRoute<RouteProp<RootStackParamList, AppScreen.RESULT>>();
    return (
        <View style={{ backgroundColor: "black", flex: 1, alignItems: "center", justifyContent: "center", padding: 16 }}>
            <View style={{ alignItems: "center" }}>
                {params.result > 0 ? <Text style={{ color: "#6dd5ed", fontSize: 20, fontWeight: '700' }}>Correct! Congratulations</Text> : <Text style={{ color: "red", fontSize: 20, fontWeight: '700' }}>Opp's You failed! try again</Text>}
                <Text style={{ color: params.result > 0 ? "#6dd5ed" : "red", fontSize: 20, fontWeight: '700' }}>You earn {params.result} points</Text>
            </View>
            <Pressable style={{ backgroundColor: "#00467F", paddingVertical: 10, paddingHorizontal: 50, position: "absolute", bottom: 0, marginBottom: 20 }} onPress={() => navigation.navigate(AppScreen.SCOREBOARD, { userScore: params.result })}>
                <View>
                    <Text style={{ color: "white", fontWeight: '700' }}>Next</Text>
                </View>
            </Pressable>
        </View>
    )
}