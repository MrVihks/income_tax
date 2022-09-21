import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image_styles:{
        width: 150,
        height: 150,
        borderRadius: 5,
        padding:10,
    },
    image_container:{
        justifyContent:'center',
        alignItems:'center',
        display:'flex'
    },
    title_style:{
        paddingTop:15,
        paddingBottom:15,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:24,
        color:'#1684DE'
    },
    text_image:{
        textAlign:"center",
        fontSize:20,
        fontWeight:'bold',

    },
    background_style:{
        backgroundColor:'#fff',
        flex:1
    }
})
export default styles
