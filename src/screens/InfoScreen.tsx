import React from 'react';
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';

const InfoScreen = ({ navigation, route }:any) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#fff'}}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: route.params.image}} />
                <Text style={styles.name}>
                    {route.params.name}
                </Text>
            </View>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Dictum varius 
                duis at consectetur lorem. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Morbi enim nunc 
                faucibus a. Eget mi proin sed libero. Nulla facilisi nullam vehicula ipsum a arcu cursus. Ultrices neque ornare 
                aenean euismod elementum nisi quis eleifend quam. Sed id semper risus in hendrerit gravida rutrum quisque non. 
                Neque aliquam vestibulum morbi blandit cursus. Donec ac odio tempor orci dapibus ultrices in. Pellentesque nec nam aliquam sem.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    image: {
        alignSelf: 'center',
        width: '100%',
        height: 250,
    },
    name: {
        fontSize: 24,
        padding: 5,
        paddingLeft: 25,
    },
    text: {
        backgroundColor: '#fff',
        padding: 10,
    },
});

export default InfoScreen;