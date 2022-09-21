import {View, Text, TouchableOpacity, Button} from 'react-native'
import styles from './style'

export default function HomeScreen({navigation}){
    return (
        <View style={styles.background_style}>
            <Text style={styles.title_style}>Imposto de Renda</Text>
            <View style={styles.box_style}>
            <TouchableOpacity style={styles.button_color}>
                <Text style={styles.home_button} onPress={()=> navigation.navigate('What')}>O que é ?</Text>
                <Text style={styles.home_button} onPress={()=> navigation.navigate('Uses')}>Para que serve ?</Text>
                <Text style={styles.home_button} onPress={()=> navigation.navigate('How')}>Como calcular ?</Text>
                <Text style={styles.home_button} onPress={() => navigation.navigate('Table')}>Tabela</Text>
                <Text style={styles.home_button} onPress={()=> navigation.navigate('Calculator')}>Calculadora</Text>
                <Text style={styles.home_button} onPress={()=> navigation.navigate('AboutUs')}>Sobre nós</Text>
                
            </TouchableOpacity>
            </View>
        </View>
)}