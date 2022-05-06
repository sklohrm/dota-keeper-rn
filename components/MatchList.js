import * as React from 'react';
import {Text, Image, View, StyleSheet, ScrollView} from 'react-native';

import MatchRow from './MatchRow';

export default class MatchList extends React.Component {
  render() {
    const {matches, onSelectMatch} = this.props;

    return (
      <View>
        <ScrollView>
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
