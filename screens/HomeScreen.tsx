import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import KittenCard from '../components/KittenCard';
import Filter from '../components/Filter/Filter';

const HomeScreen = ({ navigation }:any) => {

    interface IKitten {
        name:string,
        image:string,
        id:number,
    }

    const [currentFilter, setFilter] = useState(30);
    const [kittens, setKittens] = useState<IKitten[]>([]);

    const kittenNames:string[] = ['Alfred', 'Benny', 'Cyra', 'Derek', 'Ethan', 'Fred', 'Gale', 'Hugo', 'Iris', 'Jake', 'Kevin', 'Lina', 'Mark', 'Nathan', 'Orin', 'Popandopulus', 'Quinton', 'Rick', 'Susan', 'Teyvat', 'Uranus', 'Vivian', 'Waley', 'Xander', 'Zion']
    const minLimit:number = 350;    // limits for random generating numbers
    const maxLimit:number = 500;

    useEffect(() => {
        if (kittens.length !== currentFilter) {

            let newKittens = []
            for(let i = 0; i < currentFilter; i++) {
                let number = getRandomNumber(minLimit,maxLimit)
                let number2 = getRandomNumber(minLimit,maxLimit)
                let name = kittenNames[getRandomNumber(0,kittenNames.length-1)]
    
                newKittens.push({image: 'https://placekitten.com/' + number + '/' + number2, name: name, id: i})
            }
    
            setKittens(newKittens)
        }
    })

    const navHandler = (mode:string, id?:number) => {
        switch(mode) {
            case 'Info':
                if (id !== undefined) {
                    navigation.navigate('Info', {image: kittens[id].image, name: kittens[id].name})
                } else {
                    alert('error occured')
                }
                break;
            default:
                navigation.navigate('Home')
                break;
        }
    }

    const getRandomNumber = (min:number, max:number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const filterClickHandler = (count:number) => {
        setFilter(count)
    }

    return (
        <View style={styles.container}>
            <Filter current={currentFilter} filterClick={filterClickHandler} />
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                { kittens.map(obj => {
                   return <KittenCard cardClick={navHandler} name={obj.name} image={obj.image} id={obj.id} />
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
    }
});

export default HomeScreen;