import React from "react";
import {
    Text,
    ScrollView,
    View,
    Image
} from "react-native";

import CartNews from './cart';

import styles from './styles';

import newsImage from '../../imgs/newsImage.jpg';

import newsImage1 from '../../imgs/news/news1.png';
import newsImage2 from '../../imgs/news/news2.png';
import newsImage3 from '../../imgs/news/news3.png';
import newsImage4 from '../../imgs/news/news4.png';

function Noticias() {
    return (
        <ScrollView>
            <View style={styles.cartImage}>

                <Image style={styles.image} source={newsImage} />
                
            </View>

            <View style={{borderWidth: 0.5, borderLeftWidth: 0,borderRightWidth: 0,borderTopWidth: 0, padding: 30, alignItems: "center", justifyContent: "center", backgroundColor:"#282828"}}> 
                <Text style={{fontSize: 25, color: "white"}}>últimas novidades</Text>
            </View>

            <View style={styles.cardContainer}>
                <CartNews link='https://www.sonoticiaboa.com.br/2020/12/08/professor-indiano-vence-nobel-educacao-e-divide-1-milhao-colegas/' title="Professor indiano vence Nobel da Educação e divide U$ 1 milhão com colegas" img={newsImage3}/>
                <CartNews link='https://www.sonoticiaboa.com.br/2018/08/15/jovem-com-down-1a-professora-educacao-fisica-sul/' title="Jovem com Down é a 1ª professora de Educação Física do Sul" img={newsImage2}/>
                <CartNews link='https://g1.globo.com/sp/sao-paulo/noticia/2021/01/29/justica-derruba-liminar-e-permite-retorno-das-aulas-presenciais-no-estado-de-sao-paulo.ghtml' title="Justiça suspende liminar que proibia volta as aulas!" img={newsImage1}/>
                <CartNews link='https://www.nsctotal.com.br/noticias/na-era-do-empreendedorismo-universidades-precisam-estimular-estudantes-a-inovar' title="Universidades precisam estimular estudantes a inovar" img={newsImage4}/>
            </View>
        </ScrollView>

    );
}

{/* style={{borderWidth: 2,borderColor: "#20232a"}} */}

export default Noticias;


