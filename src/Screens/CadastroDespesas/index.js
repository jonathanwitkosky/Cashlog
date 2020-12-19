import React, { useState } from 'react';
import { Text, ScrollView, Platform, View, Button, Picker } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Container } from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';


export default () => {

    state = {
        despesas: ''
    }

    const navigation = useNavigation();

    const [description, setDescription] = useState('');
    const [cost, setCost] = useState('0');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (_, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    }

    const showDatepicker = () => {
        setShow(true);
    }

    const onRegister = () => {
        console.log('Register');
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'ConsultaDespesas' }]
        });
    }

    return (
        <Container>
            <View style={{
                flex: 1,
                width: '100%',
                padding: '5%'
            }}>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>Cadastro Despesas</Text>

                <Text style={{ fontSize: 16 }}>Descrição</Text>
                <TextInput
                    style={{ borderColor: 'black', borderWidth: 1, backgroundColor: 'white' }}
                    multiline
                    numberOfLines={4}
                    maxLength={60}
                    onChangeText={value => setDescription(value)}
                    value={description}
                />

                <Text style={{ fontSize: 16 }}>Custo</Text>
                <TextInput
                    style={{ borderColor: 'black', borderWidth: 1, backgroundColor: 'white' }}
                    keyboardType='numeric'
                    onChangeText={value => setCost(value)}
                    value={cost}
                />

                <Text style={{ fontSize: 16 }}>Data</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 16 }}>{date.toLocaleDateString('pt-br')}</Text>
                    </View>
                    <View>
                        <Button onPress={showDatepicker} title="Selecionar data" />
                    </View>
                </View>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={'date'}
                        display="default"
                        onChange={onChange}
                    />
                )}

                <Picker
                    style={{borderWidth: 1, borderColor: 'black', borderRadius: 4}}
                    selectedValue={ this.state.despesas }
                    onValueChange={(itemValor, itemIndex) => this.setState({despesas: itemValor})}
                >
                    <Picker.Item label="Alimentação" />
                    <Picker.Item label="Transporte" />
                    <Picker.Item label="Hospedagem" />
                    <Picker.Item label="Diversos" />
                </Picker>

                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginBottom: 36
                }}>
                    <Button onPress={handleMessageButtonClick} title="Cadastrar" />
                </View>
            </View>
        </Container>
    );
}