import {View, Text, TouchableOpacity, Image} from 'react-native'
import table from '../../../assets/table.jpg'
import styles from './style'

export default function TableScreen (){
    return(
        <View style={styles.background_style}>
            <Text style={styles.table_text}>Tabela IRPF 2022</Text>
            <Image source={table} style={styles.table}></Image>
        </View>
    )
}