import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity,TextInput, Imagebackground } from 'react-native';
import 'react-native-gesture-handler';
import Title from '../components/title';
import { useState } from 'react';

const Home = ({navigation}) => {
    const [name, setName] = useState('');
    return (
        <View style={styles.container}>
        {/* <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Enter your name:</Text>
                <TextInput 
                    style={styles.inputTextBox} 
                    placeholder='e.g. John Smith'
                    value={name}
                    onChangeText = {(name) => setName(name)}/>
            </View> */}
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri:"https://static.vecteezy.com/system/resources/previews/002/185/766/non_2x/ready-for-the-quiz-neon-signs-style-text-free-vector.jpg"}}
                resizeMode="contain"/>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Category",name)}}>
                <Text style={styles.buttonText}>START</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    image: {
        height: 400,
        width: 400,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
        backgroundColor: 'black',
    },
    button: {
        width: '100%',
        backgroundColor: '#1e90ff',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    },
    inputTextBox: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
        color: "white",
        fontFamily:"Roboto",
    },
    // inputContainer: {
    //     alignSelf: 'center',
    //     color: "white",
    // },
})