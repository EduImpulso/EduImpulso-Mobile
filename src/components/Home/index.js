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
        navigation.navigate("Noticias")
    }
    
    return (

        <ScrollView style={{fontFamily: "monospace"}}>
            <StatusBar />

            <View style={styles.cartImage}>
                <Image source={imageHome} style={styles.imageHome} />
                <Text style={{textAlign: "center", padding:"6%", fontSize: 23}}>"a vaga ta lá esperando vc! ✌"</Text>
            </View>

            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <View style={styles.cardText}>
                        <Text style={{ fontSize: 35, fontWeight: 'bold' }}>
                            LOGIN
                        </Text>
                        <Text style={{ fontSize: 25, textAlign: 'center' }}>
                            Clique aqui e realize seu login!
                        </Text>
                    </View>
                    <View style={styles.botaoCard}>
                        <TouchableOpacity style={styles.btn} onPress={linkLogar}
                        ><Text style={styles.texto} onPress={linkLogar}>Logar</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <View style={styles.cardText}>
                        <Text style={{ fontSize: 35, fontWeight: 'bold' }}>
                            NOTÍCIAS
                        </Text>
                        <Text style={{ fontSize: 25, textAlign: 'center' }}>
                            as prinicipais noticias sobre educação!
                        </Text>
                    </View>
                    <View style={styles.botaoCard}>
                        <TouchableOpacity style={styles.btn} onPress={linkNoticias}
                        ><Text style={styles.texto}>Acessar</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
                    
            <View style={styles.cardContainer}>
             
                <View style={styles.card}>
                    <View style={styles.cardText}>
                        <Text style={{ fontSize: 35, fontWeight: 'bold' }}>
                            TEORIAS
                        </Text>
                        <Text style={{ fontSize: 25, textAlign: 'center' }}>
                            teoria de multiplas inteligências de Harward Gardner
                        </Text>
                    </View>
                    <View style={styles.botaoCard}>
                        <TouchableOpacity style={styles.btn}
                        ><Text style={styles.texto}>Acessar</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* <Cart h1="LOGIN" txt="Clique aqui e realize seu login!"/> */}

        </ScrollView>
    );
}

export default Home;
