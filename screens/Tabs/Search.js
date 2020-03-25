import React from "react";
import styled from "styled-components";
import SearchBar from "../../components/SearchBar";
import { withNavigation } from "react-navigation";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: () => (
      <SearchBar
        onChange={("onChange", () => null)}
        onSubmit={("onSubmit", () => null)}
        value={""}
      />
    ),
    headerTitleAlign: "center"
  });

  constructor(props) {
    super(props);
    const { navigation } = props;
    this.state = {
      term: ""
    };
    navigation.setParams({
      term: this.state.term,
      onChange: this.onChange,
      onSubmit: this.onSubmit
    });
  }
  onChange = text => {
    const { navigation } = this.props;
    this.setState({ term: text });
    navigation.setParams({
      term: text
    });
  };
  onSubmit = () => {
    console.log("Submit");
  };

  render() {
    return (
      <View>
        <Text>Search</Text>
      </View>
    );
  }
}
