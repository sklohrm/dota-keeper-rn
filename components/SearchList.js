import * as React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

import SearchRow from './SearchRow';

export default class SearchList extends React.Component {
  render() {
    const {players, onSelectPlayer} = this.props;

    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>Players</Text>
        </View>
        <ScrollView style={styles.scrollView}>
          {players.map(player => {
            return (
              <SearchRow
                key={player.account_id}
                player={player}
                onSelectPlayer={onSelectPlayer}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {backgroundColor: '#DCDCDC'},
  container: {paddingLeft: 10},
  title: {fontWeight: 'bold', fontSize: 28},
});
