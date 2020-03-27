import React from "react";
import styled from "styled-components";
import SearchBar from "../../../components/SearchBar";
import useInput from "../../../hooks/useInput";
import SearchPresenter from "./SearchPresenter";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({ route, navigation }) => {
  const searchInput = useInput(route.params, route.params);
  let text = searchInput.value != undefined ? searchInput.value : "";
  navigation.setOptions({
    headerTitle: () => (
      <SearchBar {...searchInput} onSubmit={onSubmit} value={text} />
    )
  });

  let term = "";
  let shouldFetch = false;

  const onSubmit = () => {
    console.log("Submit" + text);
    term = text;
    shouldFetch = true;
    text = "";
  };

  return <SearchPresenter term={term} shouldFetch={shouldFetch} />;
};
