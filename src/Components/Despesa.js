import React, { useState } from 'react';
import { Text, View } from 'react-native';


export default ({
    name,
    cost,
    userRequester,
    approver,
    date,
    isBasic
}) => {
    return (
        <View style={{
            backgroundColor: '#fff',
            borderColor: '#000',
            borderWidth: 1,
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
        }}>
            <Text style={{ fontSize: 16 }}>Descrição: {name}</Text>
            <Text style={{ fontSize: 16 }}>Custo: R${cost}</Text>
            <Text style={{ fontSize: 16 }}>Data: {(date || '').toLocaleString()}</Text>

            {!isBasic ?
                <View>
                    <Text style={{ fontSize: 16 }}>Requerente</Text>
                    <Text style={{ fontSize: 12 }}>{userRequester}</Text>

                    <Text style={{ fontSize: 16 }}>Aprovador</Text>
                    <Text style={{ fontSize: 12 }}>{approver}</Text>
                </View>

                : null}

        </View>
    );
}