import { StyleSheet } from "react-native";

 const globalStyles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height: "100%", alignItems: "center",
        justifyContent: "space-evenly",
        padding: 16
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "700"
    },
    buttonText:{ 
        color: "white", 
        fontWeight: '700' 
    },
    button:{
        paddingVertical: 10, 
        paddingHorizontal: 50
    }
})
export default globalStyles;