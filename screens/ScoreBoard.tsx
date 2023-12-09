import { View, Text, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList, ScoreBoardScreenNavigationProp } from '../types';
import users from '../mock_data/score_board.json'
import { AppScreen } from '../enums/screens';
import globalStyles from '../styles';
import PrimaryButton from '../components/PrimaryButton';


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
        <View style={globalStyles.container}>
            <Text style={[globalStyles.title, { marginBottom: 20 }]}>Score Board</Text>
            <FlatList
                data={usersScore}
                renderItem={({ item }) => <Item name={item.name} score={item.score} />}
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: 60 }}
            />
            <PrimaryButton title='Go to Home' isSelected={true} handler={() => navigation.reset({
                index: 0,
                routes: [{ name: AppScreen.HOME }],
            })} />
        </View>
    )
}