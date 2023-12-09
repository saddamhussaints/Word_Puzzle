import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { GameScreenNavigationProp, RootStackParamList } from '../types';
import { getRandomNumber } from '../utils';
import * as data from '../mock_data/questions.json'
import { AppScreen } from '../enums/screens';


export default function Game() {
    const navigation = useNavigation<GameScreenNavigationProp>();
    const { params } = useRoute<RouteProp<RootStackParamList, AppScreen.GAME>>();
    const [randomWord, setRandomWord] = useState<any[]>([]);
    const [answer, setAnswer] = useState<any[]>([]);
    const answerRef = useRef(0);
    const userScoreRef = useRef(0);
    const [isSkippable, setIsSkippable] = useState<boolean>(true);
    const [questionIndex, setQuestionIndex] = useState(0);
    // @ts-ignore
    const questions:any[] = data[params.title.toLowerCase()]

    useEffect(() => {
        answerRef.current = 0;
        setIsSkippable(true)
        scrambledWord(questions[questionIndex].unScrambledWord);
    }, [questionIndex])

    const scrambledWord = (ans: string) => {
        setAnswer(Array.from({ length: ans.length }))
        const wordArray = ans.split('')
        for (let i = 0; i < wordArray.length; i++) {
            const j = getRandomNumber(i, wordArray.length - 1);
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];

        }
        setRandomWord(wordArray)
    }

    const setAnswerLetter = (letterIndex: number) => {
        if (answerRef.current === answer.length - 1) {
            setIsSkippable(false)
        }
        if (answerRef.current < answer.length) {
            answer[answerRef.current] = randomWord[letterIndex];
            randomWord[letterIndex] = undefined;
            setAnswer([...answer]);
            setRandomWord([...randomWord]);
            answerRef.current += 1;
        }
    }

    return (
        <View style={{ backgroundColor: "black", height: "100%", alignItems: "center", justifyContent: "space-between", padding: 16 }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>{params.title}</Text>
            <View style={{ alignItems: "center" }}>
                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "center" }}>
                    {answer.map((data, i) => <View key={i} style={{ backgroundColor: "white", width: 50, height: 50, justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, textAlign: "center", fontWeight: '700' }}>{data}</Text>
                    </View>)}
                </View>
                <Text style={{ color: "white", fontSize: 16, paddingVertical: 30 }}>{questions[questionIndex].question}</Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "center" }}>
                    {randomWord.map((data, i) => <Pressable onPress={() => setAnswerLetter(i)} key={i} style={{ backgroundColor: "white", width: 50, height: 50, justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, textAlign: "center", fontWeight: '700' }}>{data}</Text>
                    </Pressable>)}
                </View>
            </View>

            {isSkippable ? <Pressable style={{ backgroundColor: "#00467F", paddingVertical: 10, paddingHorizontal: 50, marginBottom: 20 }}
                onPress={() => {
                    if (questionIndex < questions.length - 1) {
                        setQuestionIndex(prevIndex => prevIndex + 1)
                    } else {
                        navigation.navigate(AppScreen.RESULT, { result: userScoreRef.current });
                    }
                }}
            >
                <View>
                    <Text style={{ color: "white", fontWeight: '700' }}>Skip</Text>
                </View>
            </Pressable> :
                <Pressable style={{ backgroundColor: "#00467F", paddingVertical: 10, paddingHorizontal: 50, marginBottom: 20 }}
                    onPress={() => {
                        if(questionIndex < questions.length){
                            answer.forEach((inputLetter, index) => {
                                if (inputLetter) {
                                    if (questions[questionIndex].unScrambledWord[index] === inputLetter) {
                                        userScoreRef.current++;
                                    }
                                }
                            });
                        }
                        if (questionIndex < questions.length - 1) {
                            setQuestionIndex(prevIndex => prevIndex + 1)
                        } else {
                            navigation.navigate(AppScreen.RESULT, { result: userScoreRef.current });
                        }
                    }
                    }
                >
                    <View>
                        <Text style={{ color: "white", fontWeight: '700' }}>Next</Text>
                    </View>
                </Pressable>}

        </View>
    )
}