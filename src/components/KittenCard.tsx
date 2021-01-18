import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import ProgressiveImage from './ProgressiveImage';

const KittenCard = (props:any) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card} onPress={() => props.cardClick('Info', props.id)} >
                <ProgressiveImage style={{...styles.image}} source={props.image} id={props.id} />
                <Text style={styles.name}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    card: {
        alignItems: 'center',
        width: 300,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
    },
    image: {
        width: 298,
        height: 200,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
    },
    name: {
        fontSize: 20,
        justifyContent: 'center',
    },
});

export default KittenCard;