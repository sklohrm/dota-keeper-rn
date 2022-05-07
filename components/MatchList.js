import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import MatchRow from './MatchRow';

export default class MatchList extends React.Component {
  render() {
    const {matches, onSelectMatch} = this.props;

    return (
      <View>
        <ScrollView style={styles.scrollView}>
          {matches.map(match => {
            return (
              <MatchRow
                key={match.match_id}
                match={match}
                onSelectMatch={onSelectMatch}
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
});
