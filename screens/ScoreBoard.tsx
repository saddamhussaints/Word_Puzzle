import { View, Text, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList, ScoreBoardScreenNavigationProp } from '../types';
import users from '../mock_data/score_board.json'
import { AppScreen } from '../enums/screens';


const DATA = [
    {
        id: '1',
        name: 'John',
        score: 10
    },
    {
        id: '2',
        name: 'Peter',
        score: 20
    },
    {
        id: '3',
        name: 'Williom son',
    },
];
type ItemProps = { name: string, score: number };
const Item = ({ name, score }: ItemProps) => (
    <View style={{ backgroundColor: "white", marginBottom: 20, width: "100%", flexDirection: "row", justifyContent: "space-between", padding: 16, borderRadius: 10 }}>
        <Text style={{ color: "black", fontSize: 16, fontWeight: '700' }}>{name}</Text>
        <Text style={{ color: "black", fontSize: 16, fontWeight: '700' }}>{score}</Text>
    </View>
);
export default function ScoreBoard() {
    const navigation = useNavigation<ScoreBoardScreenNavigationProp>();
    const { params } = useRoute<RouteProp<RootStackParamList, AppScreen.SCOREBOARD>>();
    const [usersScore, setUsersScore] = useState<any[]>(users);

    useEffect(() => {
        usersScore.push({ name: "You", score: params.userScore })
        usersScore.sort((a, b) => b.score - a.score)
        setUsersScore([...usersScore])
    }, [])
    return (
        <View style={{ backgroundColor: "black", flex: 1, alignItems: "center", justifyContent: "center", padding: 16 }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "700", marginBottom: 20 }}>Score Board</Text>
            <FlatList
                data={usersScore}
                renderItem={({ item }) => <Item name={item.name} score={item.score} />}
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: 60 }}
            />
            <Pressable style={{ backgroundColor: "#00467F", paddingVertical: 10, paddingHorizontal: 50, position: "absolute", bottom: 0, marginBottom: 30 }} onPress={() => navigation.reset({
                index: 0,
                routes: [{ name: AppScreen.HOME }],
            })}>
                <View>
                    <Text style={{ color: "white", fontWeight: '700' }}>Go to Home</Text>
                </View>
            </Pressable>
        </View>
    )
}