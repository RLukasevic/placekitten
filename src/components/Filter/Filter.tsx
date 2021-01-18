import React from 'react';
import { StyleSheet, View } from 'react-native';
import FilterElement from './FilterElement';

const Filter = (props:any) => {
    return (
        <View style={styles.container}>
            <FilterElement count={30} filterClick={props.filterClick} current={props.current} />
            <FilterElement count={50} filterClick={props.filterClick} current={props.current} />
            <FilterElement count={100} filterClick={props.filterClick} current={props.current} />
            <FilterElement count={props.filterInput} filterClick={props.inputClick} current={props.current} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 3,
    },
});

export default Filter;