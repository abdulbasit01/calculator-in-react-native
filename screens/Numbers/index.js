import React from 'react'
import {TouchableOpacity,Text} from 'react-native'
function Numbers(props) {
    
    return (
        <>
            <TouchableOpacity 
                style={props.styleT} 
                onPress={props.press}
                onLongPress={props.longpresss}
            >
            <Text 
                style={props.styleB}
            >{props.num}</Text>
            </TouchableOpacity>
        </>
    )
}

export default Numbers
