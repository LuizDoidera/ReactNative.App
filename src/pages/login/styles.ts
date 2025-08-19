import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { themas } from "../../global/themes";  

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    boxTop:{
        height: Dimensions.get('window').height / 3,
        width: '100%',
        backgroundColor: 'red',
    },
        boxMid:{
        height: Dimensions.get('window').height / 4,
        width: '100%',
        backgroundColor: 'green',
    },
        boxBotton:{
        height: Dimensions.get('window').height / 3,
        width: '100%',
        backgroundColor: 'blue',
    },
        logo:{
            width: 80,
            height: 80
    },
        text:{
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 48,
    },
        titleInput:{
        height: 200,
        width: '100%',
        backgroundColor: 'blue',
    },
        boxInput:{
        height: 200,
        width: '100%',
        backgroundColor: 'blue',
    },
        input:{
        height: 200,
        width: '100%',
        backgroundColor: 'blue',
    }
})