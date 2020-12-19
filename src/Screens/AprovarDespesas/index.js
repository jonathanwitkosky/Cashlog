import React from 'react';
import { FlatList, View, Button } from 'react-native';
import { Container } from './styles';
import Despesa from '../../Components/Despesa';
import { useNavigation } from '@react-navigation/native';

const dados = [
    {
        name: 'Uber',
        cost: 20,
        userRequester: 'Jonathan',
        approver: 'Thiago',
        date: new Date(),
        isBasic: true
    }
]

export default () => {

    const navigation = useNavigation();

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'ConsultaDespesas' }]
        });
    }

    return (
        <Container>
            <FlatList
                data={dados}
                renderItem={({ item }) => <Despesa {...item} />}
            />

            <View style={{
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexDirection: 'row',
                marginBottom: 50
            }}>
                <Button color='green' onPress={handleMessageButtonClick} title="Aceitar" />
                <Button color='red' onPress={handleMessageButtonClick} title="Rejeitar" />
            </View>
        </Container>
    );
}