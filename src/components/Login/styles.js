import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    caixa: {
        height: "100%",
        width: "100%",
        backgroundColor: '#8B1CDA',
        justifyContent:"center",
        alignItems: "center",
        padding: 10,
    },
    titulo: {
        color: "white",
        fontSize: 32,
    },    
    logoLogin:{
        width: "100%",
        display: "flex",
        border: "3px solid red"
    },
    inputs: {
        padding: 10,
        width: "100%",
    },
    input: {
        backgroundColor: "white",
        width: "100%",
        padding: 8,
        marginTop: 12,
        borderRadius: 4
    },
    btn: {
        backgroundColor: "#4895ef",
        width: "100%",
        marginTop: 12,
        padding: 8,
        borderRadius: 5
    },
    texto: {
        fontSize: 18,
        color: "white",
        textAlign: "center"
    },
    cartImage: {
        width: "100%", 
        height: "50%",
        alignItems:"center",
        justifyContent:"flex-start",
        borderRadius: 5
    },
    image: {
        width: "94%", 
        height: "90%",
        borderRadius: 5,
    },
    imageLogoLogin: {
        marginTop: 10,
        height: 100,
        width: 300,
    }
});

export default styles;