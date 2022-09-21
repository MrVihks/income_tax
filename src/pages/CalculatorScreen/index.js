import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from  'react-native';
import styles from './style'

export default function CalculatorScreen(){
    const [calcbase, setCalcbase] = useState(null)
    const[resp, setResp] = useState(null)
    const [aliq, setAliq] = useState(null)

    function toCalc(){
        if (calcbase <=1903,98){
            setResp("Sem imposto")    
            setAliq(null)
        }
        if (calcbase >= 1903.99 && calcbase <2826.65){
            setAliq(7.5)
            setResp(calcbase*aliq/(100))
        }
        if (calcbase >= 2826.66 && calcbase < 3751.05){
            setAliq(15)
            setResp(calcbase*aliq/(100))
        }
        if (calcbase >= 3751.05 && calcbase <4664.68){
            setAliq(22.5)
            setResp(calcbase*aliq/(100))
        }
        if (calcbase >4664.68){
            setAliq(27.5)
            setResp(calcbase*aliq/(100))
        }
    }
    return (
        <View style={styles.background_style}>
            <Text style={styles.title_style}>Calculadora</Text>
            <Text style={styles.subtitle_style}>Desconto do imposto de renda mensal</Text>
            <View style={styles.text_style}>
                <View style={styles.container_input}>
                    <Text style={styles.text_input}>Base de cálculo:</Text>
                    <TextInput style={styles.input_style} keyboardType='numeric' placeholder='Base de cálculo' value={calcbase} onChangeText={setCalcbase}/>
                    <Text style={styles.response_style}>Valor a ser pago:</Text>
                    <Text style={styles.response_var_style}>{resp}</Text>
                    <Text style={styles.response_style}>Alíquota:</Text>
                    <Text style={styles.response_var_style}>{aliq}</Text>
                </View>
                <TouchableOpacity>
                    <Text onPress={toCalc} style={styles.button_style}>Calcular</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}