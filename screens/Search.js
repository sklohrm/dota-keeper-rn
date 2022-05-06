import * as React from 'react';
import {Text, Image, View, StyleSheet, ScrollView} from 'react-native';

import SearchList from '../components/SearchList';

export default class Search extends React.Component {
  render() {
    const {players, onSelectPlayer} = this.props;
    return (
      <View>
        <SearchList players={players} onSelectPlayer={onSelectPlayer} />
      </View>
    );
  }
}
