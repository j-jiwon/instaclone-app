import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import constants from "../constants";
import styles from "../styles";
import { TextInput } from "react-native";

const SearchBar = ({ onChange, value, onSubmit }) => {
  return (
    <TextInput
      style={{
        width: constants.width - 40,
        height: 35,
        backgroundColor: styles.lightGreyColor,
        padding: 10,
        borderRadius: 5,
        textAlign: "center"
      }}
      returnKeyType="search"
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
      value={value}
      placeholder={"Search"}
      placeholderTextColor={styles.darkGreyColor}
    />
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchBar;
