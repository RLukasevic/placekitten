import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState, KittenList, IKitten } from '../redux/types';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import KittenCard from '../components/KittenCard';
import Filter from '../components/Filter/Filter';
import UserInputModal from '../components/UserInputModal';
import NetInfo from '@react-native-community/netinfo';
import { setKittens, resetKittens, toggleModal, setCurrentFilter } from '../redux/actions/HomeScreen.actions';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorage } from 'react-native';

const HomeScreen = (props:any) => {

    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState('');
    const [filterInput, setFilterInput] = useState('select');

    const kittenNames:string[] = ['Alfred', 'Benny', 'Cyra', 'Derek', 'Ethan', 'Fred', 'Gale', 'Hugo', 'Iris', 'Jake', 'Kevin', 'Lina', 'Mark', 'Nathan', 'Orin', 'Popandopulus', 'Quinton', 'Rick', 'Susan', 'Teyvat', 'Uranus', 'Vivian', 'Waley', 'Xander', 'Zion']
    const minLimit:number = 350;    // limits for random generating numbers
    const maxLimit:number = 500;


    useEffect(() => {

        NetInfo.fetch().then(async connectivity => {
            if (connectivity.isConnected) {
                if (props.kittenList.kittenList !== undefined) {
                    if (props.kittenList.kittenList.length !== props.filter.current ) {
                        initiateNewKittens()
                    } 
                } else {
                    initiateNewKittens()
                }
            } else {
                if (props.kittenList.kittenList === undefined) {
                    let asyncStorageKittens = await getKittensFromAsyncStorage()
                    if (asyncStorageKittens === null) {
                    } else {
                        if (asyncStorageKittens !== props.kittenList.kittenList) {
                            props.setKittens(asyncStorageKittens)  
                        }
                    }
                }
            }
        });
    })

    const initiateNewKittens = () => {
        let newKittens = []
        for(let i = 0; i < props.filter.current; i++) {
            let number = getRandomNumber(minLimit,maxLimit)
            let number2 = getRandomNumber(minLimit,maxLimit)
            let name = kittenNames[getRandomNumber(0,kittenNames.length-1)]

            newKittens.push({image: 'https://placekitten.com/' + number + '/' + number2, name: name, id: i})
        }

        props.setKittens(newKittens)
        assignKittensToAsyncStorage(newKittens)
    }

    const assignKittensToAsyncStorage = async (kittenList:KittenList) => {
        try {
            const jsonValue = JSON.stringify(kittenList)
            await AsyncStorage.setItem('kittenList', jsonValue)
          } catch(e) {
            alert('ERROR: Unable to save into async storage')
          }
    }

    const getKittensFromAsyncStorage = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('kittenList')
            return jsonValue === null ? null : JSON.parse(jsonValue)
          } catch(e) {
            alert('ERROR: Unable to read from async storage')
          }
    }

    const navHandler = (mode:string, id?:number) => {
        switch(mode) {
            case 'Info':
                if (id !== undefined) {
                    props.navigation.navigate('Info', {image: props.kittenList.kittenList[id].image, name: props.kittenList.kittenList[id].name})
                } else {
                    alert('error occured')
                }
                break;
            default:
                props.navigation.navigate('Home')
                break;
        }
    }

    const getRandomNumber = (min:number, max:number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const filterClickHandler = (count:number) => {
        props.setCurrentFilter(count)
        setFilterInput('select')
    }

    const inputClickHandler = () => {
        setInputError('')
        props.toggleModal()
    }

    const modalButtonHandler = () => {
        if (Number(inputValue).toString() !== 'NaN' && inputValue.toString() !== '' ) {
            props.toggleModal()
            setFilterInput(Math.ceil(Number(inputValue)).toString())
            props.setCurrentFilter(Math.ceil(Number(inputValue)))
            setInputValue('')
            setInputError('')
        } else {
            setInputValue('')
            setInputError('ERROR: Please input a number')
        }
    }

    return (
        <View style={styles.container}>
            <UserInputModal 
                modalShow={props.filterInputModal.modalShow}
                setModalShow={() => props.toggleModal()}
                inputClickHandler={inputClickHandler}
                modalButtonHandler={modalButtonHandler}
                setInputValue={setInputValue}
                inputError={inputError}
                inputValue={inputValue}
            />
            <Filter current={props.filter.current} filterClick={filterClickHandler} inputClick={props.toggleModal} filterInput={filterInput} />
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                { props.kittenList.kittenList === undefined ? <Text style={styles.text}>Couldn't connect to the internet</Text> : props.kittenList.kittenList.map((obj:IKitten) => {
                   return <KittenCard cardClick={navHandler} name={obj.name} image={obj.image} key={obj.id} id={obj.id} />
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroll: {
        paddingBottom: 15,
        marginBottom: 30,
    },
    text: {
        fontSize: 20,
        minHeight: 500,
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});

const mapStateToProps = (state: AppState) => ({
    kittenList: state.kittenList,
    filterInputModal: state.filterInputModal,
    filter: state.filter
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setKittens: (list:KittenList) => {
        dispatch(setKittens(list));
    },
    resetKittens: () => {
        dispatch(resetKittens());
    },
    toggleModal: () => {
        dispatch(toggleModal());
    },
    setCurrentFilter: (newCurrent:number) => {
        dispatch(setCurrentFilter(newCurrent));
    },
});

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);