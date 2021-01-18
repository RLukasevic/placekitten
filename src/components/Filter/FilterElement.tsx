import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';

const FilterElement = (props:any) => {

    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={() => props.filterClick(props.count)}>
                <Text style={props.current == props.count ? styles.buttonActive : styles.button}>
                    {props.count}
                </Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderWidth: 1,
        minWidth: 80,
        maxHeight: 50,
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
        borderColor: 'black',
        backgroundColor: 'cyan',
    },
    buttonActive: {
        borderWidth: 1,
        minWidth: 80,
        maxHeight: 50,
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
        borderColor: 'black',
        backgroundColor: '#669ed4',
    }
});

export default FilterElement;