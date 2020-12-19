import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, InputArea, CustomButton, CustomButtonText, SignMessageButton, SignMessageButtonText, SignMessageButtonTextBold } from './styles';

import LoginInput from '../../Components/LoginInput';

export default () => {

    const [emailField, setEmailField] = useState('');
    const [senhaField, setSenhaField] = useState('');

    const navigation = useNavigation();

    const handleLoginClick = async () => {
        navigation.reset({
            routes: [{ name: 'MainTab' }]
        });
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'Cadastro' }]
        });
    }

    return (
        <Container>
            <InputArea>
                <LoginInput
                    placeholder="Digite seu Email"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />

                <LoginInput
                    placeholder="Digite sua Senha"
                    value={senhaField}
                    onChangeText={t => setSenhaField(t)}
                    senha={true}
                />

                <CustomButton onPress={handleLoginClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}
