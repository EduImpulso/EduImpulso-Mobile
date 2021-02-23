import React from "react";
import {
    Text,
    View,
    StatusBar,
    Image,
    ScrollView,
    TouchableOpacity
} from "react-native";

import imageHome from "../../imgs/imageHome.jpg";
import Cart from "./cart";
import styles from "./styles";

function Home({navigation}) {

    function linkLogar() {
        navigation.navigate("Login")
    }
    function linkNoticias() {
        navigation.navigate("News")
    }
    
    return (

        <ScrollView style={{fontFamily: "monospace"}}>
            <StatusBar />

            <View style={styles.cartImage}>
                <Image source={imageHome} style={styles.imageHome} />
                <Text style={{textAlign: "center", padding:"6%", fontSize: 23, color: "white"}}>a vaga ta lá esperando vc! ✌</Text>
            </View>

            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <View style={styles.cardText}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                            entrar
                        </Text>
                        <Text style={{ fontSize: 18, textAlign: 'center' }}>
                            clique aqui e faça seu login
                        </Text>
                    </View>
                    <View style={styles.botaoCard}>
                        <TouchableOpacity style={styles.btn} onPress={linkLogar}
                        ><Text style={styles.texto} onPress={linkLogar}>entrar</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <View style={styles.cardText}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                            notícias
                        </Text>
                        <Text style={{ fontSize: 18, textAlign: 'center' }}>
                            novidades sobre educação
                        </Text>
                    </View>
                    <View style={styles.botaoCard}>
                        <TouchableOpacity style={styles.btn} onPress={linkNoticias}
                        ><Text style={styles.texto}>acessar</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
                    


            {/* <Cart h1="LOGIN" txt="Clique aqui e realize seu login!"/> */}

        </ScrollView>
    );
}

export default Home;
