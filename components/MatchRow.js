import * as React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import heroes from 'dotaconstants/build/heroes.json';

export default class MatchRow extends React.Component {
  getHeroName = playerHeroID => {
    return (
      Object.values(heroes).find(hero => hero.id === playerHeroID)
        ?.localized_name ?? ''
    );
  };

  builtHeroIconURI = playerHeroID => {
    endpoint =
      Object.values(heroes).find(hero => hero.id === playerHeroID)?.img ?? '';
    return 'http://cdn.dota2.com' + endpoint;
  };

  render() {
    const {key, match, onSelectMatch} = this.props;
    return (
      <View>
        <TouchableOpacity onPress={() => onSelectMatch(match)}>
          <Image
            source={{uri: this.builtHeroIconURI(match.hero_id)}}
            style={{width: 40, height: 40}}
          />
          <Text>{this.getHeroName(match.hero_id)}</Text>
          <Text>
            {match.kills}/{match.deaths}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
