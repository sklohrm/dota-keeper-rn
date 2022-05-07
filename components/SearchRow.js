import * as React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class SearchRow extends React.Component {
  render() {
    const {key, player, onSelectPlayer} = this.props;
    return (
      <View>
        <TouchableOpacity onPress={() => onSelectPlayer(player)}>
          <Text>{player.account_id}</Text>
          <Text>{player.personaname}</Text>
          <Image
            source={{uri: player.avatarfull}}
            style={{width: 40, height: 40}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
