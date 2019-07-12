import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import constants from "../constants";

const Container = styled.View`
    margin-bottom: 10px;
`;
const TextInput = styled.TextInput`
    width: ${constants.width / 2};
    padding: 10px;
    background-color: ${props => props.theme.grayColor};
    border: 1px solid ${props => props.theme.darkGrayColor};
    border-radius: 4px;
`;

const AuthInput = ({
    placeholder,
    value,
    keyboardType = "default",
    autoCapitalize = "none",
    onChange
}) => (
    <Container>
        <TextInput
            onChangeText={onChange}
            placeholder={placeholder}
            value={value}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
        />
    </Container>
);

AuthInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    keyboardType: PropTypes.oneOf([
        "default",
        "number-pad",
        "decimal-pad",
        "numeric",
        "email-address",
        "phone-pad"
    ]),
    autoCapitalize: PropTypes.oneOf([
        "none",
        "sentences",
        "words",
        "characters"
    ]),
    onChange: PropTypes.func.isRequired
};

export default AuthInput;
