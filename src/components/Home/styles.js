import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    cartImage: {
        width: "100%"
    },
    imageHome: {
        width: "100%", 
        height: 200,
        borderRadius: 5,
    },
    cardContainer: {
        width: "100%",
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        padding: 10,
        width: "80%",
        backgroundColor: "#4CC9F0",
        alignItems: "center",
        borderRadius: 10
    },
    cardText: {
        alignItems: "center",
        marginBottom: 10,
        color: "black",
    },
    botaoCard: {
        width: "80%",
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
    }
});

export default styles;