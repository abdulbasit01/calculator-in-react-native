import React from 'react'
import { Appbar,Title } from 'react-native-paper';
import {
    Text,
    View,
  } from 'react-native';
  
function Header({name}) {
    return (
        <>
            
            <Appbar.Header
                theme={{
                    colors:{
                        primary:'#00aaff',
                        
                    }
                }}
                style={{flexDirection:'row',justifyContent:'center'}}
            >
                <Title style={{color:'#fff'}}>
                    {name}
                </Title>
            </Appbar.Header>
        </>
    )
}

export default Header
