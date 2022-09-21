import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import styles from './style';

import vinicius from '../../../assets/vinicius.jpeg'
import miguel from '../../../assets/miguel.jpeg'
import victu from '../../../assets/victu.jpeg'
import melonha from '../../../assets/melonha.jpeg'
import yohana from '../../../assets/yohana.jpeg'
import kauan from '../../../assets/kauan.jpg'
import { useState } from 'react';


export default function AboutUsScreen(){

    const [easter_egg, seteaster_egg] = useState("Miguel Henrique")
    const [easter_egg2, seteaster_egg2] = useState("Victor Reis")
    let click = 0
    let click2 =0
    function calvar(){
        if(click2<1){
            seteaster_egg2("Victu Calvo")
            click2++
        }else{
            seteaster_egg2("Victor Reis")
            click2=0
        }
        if (click< 1){
        seteaster_egg("Calvo")
        click++
        }else{
            seteaster_egg("Miguel Henrique")
            click = 0
        }
    }
    return(
        <SafeAreaView style={styles.background_style}>
            <ScrollView>
                <Text style={styles.title_style}>Sobre nós</Text>

                <View style={styles.image_container}>
                    <Text style={styles.text_image}>Vinicius Henrique</Text>
                    <Image source={vinicius} style={styles.image_styles}/>
                    <Text style={styles.text_image} onPress={calvar}>{easter_egg}</Text>
                    <Image source={miguel} style={styles.image_styles}/>
                    <Text style={styles.text_image}>{easter_egg2}</Text>
                    <Image source={victu} style={styles.image_styles}/>
                    <Text style={styles.text_image}>Mellanye</Text>
                    <Image source={melonha}style={styles.image_styles} />
                    <Text style={styles.text_image}>Yohana</Text>
                    <Image source={yohana} style={styles.image_styles}/>
                    <Text style={styles.text_image}>Kauan</Text>
                    <Image source={kauan} style={styles.image_styles}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}