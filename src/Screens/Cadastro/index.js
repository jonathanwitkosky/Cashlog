import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, InputArea, CustomButton, CustomButtonText, SignMessageButton, SignMessageButtonText, SignMessageButtonTextBold } from './styles';
import { Picker, View } from 'react-native';

//import CashlogLogo from '../../Assets/cashlogLogo.png';
// Se quiser colocar alguma imagem:
//<CashlogLogo width="100%" height="160" />

import SignInput from '../../Components/LoginInput'
import LoginInput from '../../Components/LoginInput';

export default () => {

    state = {
        cargos: ''
    }

    const navigation = useNavigation();

    const handleLoginClick = () => {
        navigation.reset({
            routes: [{name: 'Login'}]
        }); 
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'Login'}]
        });
    }

    return (
        <Container>

            <InputArea>
                <LoginInput placeholder="Digite seu Email" />
                <LoginInput placeholder="Digite sua Senha" />
                <LoginInput placeholder="Confirme sua Senha" />
                <LoginInput placeholder="Digite seu CPF" />

                <View>
                <Picker
                    selectedValue={ this.state.cargos }
                    onValueChange={(itemValor, itemIndex) => this.setState({cargos: itemValor})}
                >
                    <Picker.Item label="Representante" />
                    <Picker.Item label="Gestor" />
                </Picker>
                </View>

                <CustomButton onPress={handleMessageButtonClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleLoginClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}
