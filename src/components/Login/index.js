import React from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert
} from "react-native";

import { TextInput } from "react-native-gesture-handler";
import bannerLogin from '../../imgs/login.jpeg'
import logoLogin from '../../imgs/logoLogin.png'
import styles from "./styles";

function Login() {

    function autenticacao() {
        Alert.alert("Usuario", "Login realizado!")
    }

    return (
        
        <View style={styles.caixa}>

            <View>

                <Image source={logoLogin} style={styles.imageLogoLogin}/>                

            </View>
            <Text style={styles.titulo}>
                    login 🔑
            </Text>
            
            <View style={styles.inputs}>
                <TextInput
                placeholder="digite o usuário"
                style={styles.input}
                />
                <TextInput
                placeholder="digite a senha"
                secureTextEntry={true}
                style={styles.input}
                />

                <TouchableOpacity style={styles.btn} onPress={autenticacao}>
                    <Text style={styles.texto}>entrar</Text>
                </TouchableOpacity>
                <Text style={{color: "white"}}>cadastre-se!</Text>


            </View>
            {/* style={{borderWidth: 2,borderColor: "#20232a"}} */}
            <View style={styles.cartImage}>

                <Image source={bannerLogin} style={styles.image} />
                    
            </View>
        </View>

    );
}

export default Login;