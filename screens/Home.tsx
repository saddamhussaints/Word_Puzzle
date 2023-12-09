import { View, Text, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from '../types';
import { AppScreen } from '../enums/screens';



export default function Home() {
    const categories = ['Animals', 'Countries', 'Fruits'];
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const [selected, setSelected] = useState<string>();

    return (
        <View style={{ backgroundColor: "black", height: "100%", alignItems: "center", justifyContent: "space-evenly", padding: 16 }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>Words Puzzle</Text>
            {categories.map((category, i) => <Pressable key={i} style={{ backgroundColor: selected === category ? "#F37335" : "#F2C94C", paddingVertical: 10, paddingHorizontal: 50 }}
                onPress={() => setSelected(category)}
            >
                <View>
                    <Text style={{ color: "white", fontWeight: '700' }}>{category}</Text>
                </View>
            </Pressable>)}
            <Pressable style={{ backgroundColor: "#00467F", paddingVertical: 10, paddingHorizontal: 50, opacity: !Boolean(selected) ? 0.7 : 1 }}
                onPress={() => { navigation.navigate(AppScreen.GAME, { title: selected!}) }}
                disabled={!Boolean(selected)}
            >
                <View>
                    <Text style={{ color: "white", fontWeight: '700' }}>Next</Text>
                </View>
            </Pressable>
        </View>
    )
}