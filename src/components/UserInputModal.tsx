import React from 'react';
import { StyleSheet, View, Modal, TouchableOpacity, Text, TextInput, TouchableHighlight } from 'react-native';

const UserInputModal = (props:any) => {
    return (
        <Modal 
            animationType="fade"
            transparent={true}
            visible={props.modalShow}
            onRequestClose={() => {
                props.inputClickHandler();
            }}
        >
            <TouchableOpacity
                style={{ backgroundColor: '#000', opacity: 0.7, flex: 1,justifyContent:'center' }}
                onPress={() => props.setModalShow(!props.modalShow)}>
            </TouchableOpacity>
            <View style={styles.modal}>
                {props.inputError !== '' ? <Text style={styles.error}>{props.inputError}</Text> : null}
                <Text style={styles.text}>Please input a desired kitten list length</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={text => props.setInputValue(text)}
                    value={props.inputValue}
                    placeholder='Input desired number'
                />
                <TouchableHighlight activeOpacity={0.4} underlayColor='#fff' onPress={() => props.modalButtonHandler()}>
                    <Text style={styles.button}>
                        Display {props.inputValue} kittens !
                    </Text>
                </TouchableHighlight>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        position: "absolute",
        backgroundColor: '#fff',
        width: 300,
        marginTop: '50%',
        height: 200,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 18,
    },
    text: {
        textAlign: 'center',
        marginBottom: 15,
    },
    input: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        margin: 10,
        padding: 10,
    },
    button: {
        borderWidth: 1,
        padding: 10,
        margin: 20,
        marginBottom: 0,
        fontSize: 14,
        borderRadius: 14,
        textAlign: 'center',
        borderColor: 'black',
        backgroundColor: 'cyan',
    },
    error: {
        color: 'red',
        textAlign: 'center',
    }
});

export default UserInputModal;