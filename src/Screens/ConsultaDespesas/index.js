import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import Despesa from '../../Components/Despesa';
import { Container } from './styles';

const dados = [
    {
        name: 'Uber',
        cost: 20,
        userRequester: 'Jonathan',
        approver: 'Thiago',
        date: new Date(),
        isBasic: true
    }, {
        name: 'Almoço',
        cost: 50,
        userRequester: 'Jonathan',
        approver: 'Thiago',
        date: new Date(),
        isBasic: true
    }, {
        name: 'Lanche',
        cost: 28,
        userRequester: 'Jonathan',
        approver: 'Thiago',
        date: new Date(),
        isBasic: true
    }, {
        name: 'Uber',
        cost: 20,
        userRequester: 'Jonathan',
        approver: 'Thiago',
        date: new Date(),
        isBasic: true
    }, {
        name: 'Uber',
        cost: 20,
        userRequester: 'Jonathan',
        approver: 'Thiago',
        date: new Date(),
        isBasic: true
    }, {
        name: 'Almoço',
        cost: 50,
        userRequester: 'Jonathan',
        approver: 'Thiago',
        date: new Date(),
        isBasic: true
    }
]

export default () => {
    return (
        <Container>
            <FlatList
                data={dados}
                renderItem={({ item }) => <Despesa {...item} />}
            />
        </Container>
    );
}

const styles = StyleSheet.create({
    textoItem: {
        fontSize: 20,
        color: '#34495e',
        padding: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    }
})