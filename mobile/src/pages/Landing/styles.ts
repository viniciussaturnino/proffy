import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },

    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 40
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    buttons: {
        height: 150,
        width: '48%',
        justifyContent: 'space-between',
        padding: 25,
        borderRadius: 8
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 20,
        color: '#FFF'
    },

    buttonPrimary: {
        backgroundColor: '#9871F5',
    },

    buttonSecondary: {
        backgroundColor: '#04D361',
    },

    totalConnections: {
        marginTop: 40,
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
        fontSize: 12,
        maxWidth: 140,
        lineHeight: 20,
    },
});

export default styles;