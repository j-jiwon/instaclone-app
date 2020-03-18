import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import constants from "../../constants";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Image = styled.Image`
  width: ${constants.width / 2.3};
  margin-bottom: -90px;
  margin-top: -100px;
`;

const Touchable = styled.TouchableOpacity``;
const SignUpBtn = styled.View`
  background-color: ${props => props.theme.blueColor};
  padding: 10px;
  margin: 0px;
  border-radius: 5px;
  width: ${constants.width / 1.8};
  margin-bottom: 25px;
`;

const SignUpBtnText = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;

const LoginLink = styled.View``;
const LoginLinkText = styled.Text`
  color: ${props => props.theme.blueColor};
`;

export default ({ navigation }) => (
  <View>
    <Image
      resizeMode={"contain"}
      source={require("../../assets/Instagram_logo.png")}
    />
    <Touchable onPress={() => navigation.navigate("Signup")}>
      <SignUpBtn>
        <SignUpBtnText>Create New Accounts</SignUpBtnText>
      </SignUpBtn>
    </Touchable>
    <Touchable onPress={() => navigation.navigate("Login")}>
      <LoginLink>
        <LoginLinkText>Log in</LoginLinkText>
      </LoginLink>
    </Touchable>
  </View>
);
