import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title_style:{
        textAlign:'center',
        paddingTop:15,
        fontWeight:'bold',
        fontSize:28,
        color:'#1684DE'
    },
    text_style:{
        textAlign:'center',
        padding:15,
        margin:30,
        fontSize:18,
        backgroundColor:'#fff',
        borderRadius:15,
        elevation:20

    },
    background_style:{
        backgroundColor:'#fff',
        flex:1
    },
    button_style:{
        marginTop:15,
        fontSize:17,
        padding:15,
        elevation:20,
        textAlign:'center',
        backgroundColor:'#0CC9F5',
        borderRadius:15,
    },
    input_style:{
        backgroundColor:"#D1E8DD",
        marginHorizontal:'auto',
        textAlign:'center',
        borderRadius:15,
        width:200,
        height:60,
    },
    container_input:{
        justifyContent:'center',
        alignItems:'center',
        display:'flex'
    },
    response_style:{
        color:'#0C24F5',
        marginTop:10,
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
    },
    subtitle_style:{
        fontSize:14,
        textAlign:'center',
        fontWeight:'bold',
        color:'#1684DE'
    },
    response_var_style:{
        color:'red',
        fontSize:16,
        fontWeight:'bold',
    },
    text_input:{
        color:'#1684DE',
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
    }

})

export default styles