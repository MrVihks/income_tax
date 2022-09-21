import {View, Text} from 'react-native'

import styles from './style'

export default function WhatScreen (){
    return(
        <View style={styles.what_style}>
            <Text style={styles.title_text}>O que é o Imposto de Renda?</Text>
            <Text style={styles.text_content}>Imposto de Renda é a dedução de uma parcela da renda média anual de um trabalhador para repasse ao governo.
Essa parcela descontada pode tanto variar de acordo com a renda média anual, como ser fixa, dependendo do regime tributário adotado pelo país.
O órgão responsável pelo IR é a Receita Federal</Text>
        </View>
    )
}