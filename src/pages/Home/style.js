import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    home: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center', 
      marginTop: 30,
      button: 'black',
    },

    loginText: {
      marginTop: 16,
      paddingVertical: 4,
      borderRadius: 2,
      backgroundColor: "#66CDAA",
      color: "#FFFAFA",
      textAlign: "center",
      fontSize: 20,
      fontWeight: "Arial",
      width: '80%',      
    },

    homeText: {
      fontSize: 20,
      fontWeight: 'Arial',
      color: '#808080',
    }
    
});

export default styles
