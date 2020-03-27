import React from "react";
import styled from "styled-components";
import SearchBar from "../../components/SearchBar";
import useInput from "../../hooks/useInput";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({ route, navigation }) => {
  const searchInput = useInput(route.params, route.params);
  let text = "";
  if (searchInput.value != undefined) text = searchInput.value;
  navigation.setOptions({
    headerTitle: () => (
      <SearchBar {...searchInput} onSubmit={onSubmit} value={text} />
    )
  });

  const onSubmit = () => {
    console.log("Submit");
    text = "";
  };

  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};
