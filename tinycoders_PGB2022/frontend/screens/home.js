import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import Title from '../components/title';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Title titleText='QUIZZLLER'/>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri:"https://image.shutterstock.com/image-vector/quiz-comic-pop-art-style-260nw-1506580442.jpg"}}
                resizeMode="contain"/>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Quiz")}}>
                <Text style={styles.buttonText}>START</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 300,
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
    },
    button: {
        width: '100%',
        backgroundColor: '#1A759F',
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
})