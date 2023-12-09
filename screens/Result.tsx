import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ResultScreenNavigationProp, RootStackParamList } from '../types';
import { AppScreen } from '../enums/screens';
import globalStyles from '../styles';

export default function Result() {
    const navigation = useNavigation<ResultScreenNavigationProp>();
    const { params } = useRoute<RouteProp<RootStackParamList, AppScreen.RESULT>>();
    return (
        <View style={globalStyles.container}>
            <View style={{ alignItems: "center" }}>
                {params.result > 0 ? <Text style={[styles.congrats, { color: "#6dd5ed" }]}>Correct! Congratulations</Text> : <Text style={[styles.congrats, { color: "red" }]}>Opp's You failed! try again</Text>}
                <Text style={[styles.congrats, { color: params.result > 0 ? "#6dd5ed" : "red" }]}>You earn {params.result} points</Text>
            </View>
            <Pressable style={[globalStyles.button, { backgroundColor: "#00467F", position: "absolute", bottom: 0, marginBottom: 20 }]} onPress={() => navigation.navigate(AppScreen.SCOREBOARD, { userScore: params.result })}>
                <View>
                    <Text style={globalStyles.buttonText}>Next</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    congrats: {
        fontSize: 20,
        fontWeight: '700'
    }
})