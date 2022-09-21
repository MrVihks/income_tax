import {View, Text} from 'react-native'

import styles from './style'

export default function UsesScreen(){
    return(
        <View style={styles.background_style}>
            <Text style={styles.title_style}>Para que serve ?</Text>
            <View>
                <Text style={styles.text_style}>Ela serve, basicamente, para informar os rendimentos que foram recebidos, sejam eles, tributáveis ou não tributáveis. Ou seja, mesmo que você não tenha que pagar nada, é essencial declará-los.
Ele é um tributo federal – como diz o nome – sobre a renda. Ou seja, sobre o que você ganha. E ainda acompanha a sua evolução patrimonial. Para fazer esse acompanhamento, o governo solicita aos trabalhadores e empresas que informem para a Receita Federal e que são seus ganhos anuais.</Text>
            </View>
        </View>
    )
}