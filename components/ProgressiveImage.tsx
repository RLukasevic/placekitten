import React, { useState } from 'react';  
import { Image, StyleSheet, View, ActivityIndicator } from 'react-native';  
  
const ProgressiveImage = (props:any) => {  

    const [loaded,setLoaded] = useState(0)

    const onLoadEnd = () => {
        setLoaded(1)
    }

    const onLoadStart = () => {
        setLoaded(0)
    }

    return (
        <View>
            <View style={styles.container}>
            {loaded === 0 ? <ActivityIndicator style={styles.spinner} size="large" color="#0000ff" /> : null }    
            <Image
                source={{uri: props.source}}
                style={{...props.style}}
                onLoadStart={onLoadStart}
                onLoadEnd={onLoadEnd}
            />
            </View>
        </View>
    );  
}  
const styles = StyleSheet.create({  
    container: {  
        width: 290,
        height: 200,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    spinner: {
        position: "absolute",
    }
}); 

export default ProgressiveImage;