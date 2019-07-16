import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQueries";
import { Alert } from "react-native";
import { useMutation } from "react-apollo-hooks";

const View = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const FBContainer = styled.View`
    margin-top: 25px;
    padding-top: 25px;
    border-top-width: 1px;
    border-color: ${props => props.theme.lightGrayColor};
    border-style: solid;
`;

export default ({ navigation }) => {
    const fNameInput = useInput("");
    const lNameInput = useInput("");
    const emailInput = useInput(navigation.getParam("email", ""));
    const usernameInput = useInput("");
    const createAccountMutation = useMutation(CREATE_ACCOUNT, {
        variables: {
            username: usernameInput.value,
            email: emailInput.value,
            firstName: fNameInput.value,
            lastName: lNameInput.value
        }
    });
    const [loading, setLoading] = useState(false);

    const handleSignup = async () => {
        const { value: email } = emailInput;
        const { value: fName } = fNameInput;
        const { value: lName } = lNameInput;
        const { value: username } = usernameInput;
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!emailRegex.test(email)) {
            return Alert.alert("That email is invalid");
        }
        if (fName === "") {
            return Alert.alert("I need your name");
        }
        if (username === "") {
            return Alert.alert("Invalid username");
        }
        try {
            setLoading(true);
            const {
                data: { createAccount }
            } = await createAccountMutation();
            if (createAccount) {
                Alert.alert("Account created", "Log in now");
                navigation.navigate("Login", { email });
            }
        } catch (e) {
            console.log(e);
            Alert.alert("Username taken.", "Log in instead");
            navigation.navigate("Login", { email });
        } finally {
            setLoading(false);
        }
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                <AuthInput
                    {...fNameInput}
                    placeholder="First name"
                    autoCapitalize="words"
                />
                <AuthInput
                    {...lNameInput}
                    placeholder="Last name"
                    autoCapitalize="words"
                />
                <AuthInput
                    {...emailInput}
                    placeholder="Email"
                    keyboardType="email-address"
                    returnKeyType="send"
                    autoCorrect={false}
                />
                <AuthInput
                    {...usernameInput}
                    placeholder="Username"
                    returnKeyType="send"
                    autoCorrect={false}
                />
                <AuthButton
                    loading={loading}
                    text="Sign up"
                    onPress={handleSignup}
                />
                <FBContainer>
                    <AuthButton
                        bgColor={"#2D4DA7"}
                        loading={false}
                        onPress={() => {
                            Alert.alert("We cannot provide Facebook Login.");
                        }}
                        text="Connect FaceBook"
                    />
                </FBContainer>
            </View>
        </TouchableWithoutFeedback>
    );
};
