import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#8257E5',
    },

    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 24,
        color: '#FFF',
        maxWidth: 160,
        marginTop: 30,
        lineHeight: 32,
        marginVertical: 40
    },
});

export default styles;