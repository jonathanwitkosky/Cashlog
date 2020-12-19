import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, InputArea } from './styles';

import PerfilDados from '../../Components/PerfilDados';


export default () => {
    return (
        <Container>
            <View >
                <Image 
                    style={{width: 150, height: 150, top: -10}}
                    source={require('../../Assets/perfil.png')} 
                />
            </View>

            <InputArea>
                <PerfilDados value="Jonathan W." />
                <PerfilDados value="12345678987" />
                <PerfilDados value="jonathan.witkosky@catolicasc.org.br" />
                <PerfilDados value="Representante" />
            </InputArea>
        </Container>
    );
}

const styles = StyleSheet.create({
    imagem: {
        height: -10,
        width: -20
    },
})