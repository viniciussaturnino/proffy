import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },

    content: {
        flex: 1,
        justifyContent: 'center'
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 32,
        lineHeight: 37,
        color: '#FFF',
        maxWidth: 180
    },

    description: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        color: '#D4C2FF',
        lineHeight: 26,
        maxWidth: 240,
        marginTop: 24
    },

    button: {
        width: 294,
        height: 56,
        marginVertical: 40,
        backgroundColor: '#04D361',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textButton: {
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 16,
        color: '#FFF',
    },
});

export default styles;