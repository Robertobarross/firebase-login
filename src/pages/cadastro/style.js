import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#313131',
        marginTop: 10,
        width: '80%',
        height: 50,
        fontSize: 20,
        fontWeight: "Arial",
        color: '#808080'
    },
    button: {
        marginTop: 16,
        paddingVertical: 4,
        borderRadius: 2,
        backgroundColor: "#66CDAA",
        color: "#FFFAFA",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "Arial",
        width: 290 
    },
    cadastroText: {
        fontSize: 20,
        fontWeight: 'Arial',
        color: '#808080',
      },
      loginText: {
        fontSize: 13,
        fontWeight: 'Arial',
        color: '#808080',
        alignItems: 'center',
        marginTop: 15
      }
})

export default styles