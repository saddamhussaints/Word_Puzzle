import { View, Text, Button, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from '../types';
import { AppScreen } from '../enums/screens';
import globalStyles from '../styles';



export default function Home() {
    const categories = ['Animals', 'Countries', 'Fruits'];
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const [selected, setSelected] = useState<string>();

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Words Puzzle</Text>
            {categories.map((category, i) => <Pressable key={i} style={[globalStyles.button, { backgroundColor: selected === category ? "#F37335" : "#F2C94C", }]}
                onPress={() => setSelected(category)}
            >
                <View>
                    <Text style={globalStyles.buttonText}>{category}</Text>
                </View>
            </Pressable>)}
            <Pressable style={[globalStyles.button,{ backgroundColor: "#00467F",  opacity: !Boolean(selected) ? 0.7 : 1 }]}
                onPress={() => { navigation.navigate(AppScreen.GAME, { title: selected! }) }}
                disabled={!Boolean(selected)}
            >
                <View>
                    <Text style={globalStyles.buttonText}>Next</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({


})