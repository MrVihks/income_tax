import {View,Text} from 'react-native'

import styles from './style'

export default function HowScreen(){
    return(
        <View style={styles.background_style}>
            <Text style={styles.title_style}>Como calcular o imposto de renda ?</Text>
            <View>
                <Text style={[styles.text_style, styles.shadow_box]}>Para calcular o imposto de renda , inicialmente a Receita Federal realiza o somatório de todos os rendimentos tributáveis informados pelo contribuinte. Em seguida, desse valor, ela subtrai as despesas dedutíveis que foram incluídas na declaração. Essa conta tem como resultado a base de cálculo do IR da pessoa.</Text>
                <View style={[styles.text_style, styles.shadow_box]}>
                    <Text style={styles.text_label}>De forma resumida , para calcular o imposto de Renda no modelo completo são realizadas as seguintes etapas: </Text>
                        <Text style={styles.text_label}>• subtração: soma dos rendimentos tributáveis- soma das despesas  dedutíveis = Base de cálculo do IR </Text>
                        <Text style={styles.text_label}>• multiplicação: aplicação da alíquota de IR sobre a base de cálculo= imposto devido pelo contribuinte.</Text>
                        <Text style={styles.text_label}>• subtração: valor devido de imposto- imposto pago durante o ano= valor de IR a ser quitado ou restituído .</Text>
                </View>
            </View>
        </View>
    )
}