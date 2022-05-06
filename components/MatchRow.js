import * as React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class MatchRow extends React.Component {
  render() {
    const {key, match, onSelectMatch} = this.props;
    return (
      <View>
        <TouchableOpacity onPress={() => onSelectMatch(match)}>
          <Text>{match.match_id}</Text>
          <Text>
            {match.kills}/{match.deaths}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
