import { View, Text, Button, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from '../types';
import { AppScreen } from '../enums/screens';
import globalStyles from '../styles';
import PrimaryButton from '../components/PrimaryButton';



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
            <PrimaryButton title='Next' isSelected={selected} handler={()=>navigation.navigate(AppScreen.GAME, { title: selected! }) } />
        </View>
    )
}

const styles = StyleSheet.create({


})