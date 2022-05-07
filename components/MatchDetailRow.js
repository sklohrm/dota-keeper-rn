import * as React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import items from 'dotaconstants/build/items.json';
import heroes from 'dotaconstants/build/heroes.json';

//// http://cdn.dota2.com/       apps/dota2/images/items/blink_lg.png
///                              apps/dota2/images/items/blink_lg.png?t=1593393829403

export default class MatchDetailRow extends React.Component {
  builtHeroIconURI = playerHeroID => {
    endpoint =
      Object.values(heroes).find(hero => hero.id === playerHeroID)?.icon ?? '';
    return 'http://cdn.dota2.com' + endpoint;
  };

  buildItemURI = playerItem => {
    endpoint =
      Object.values(items).find(item => item.id === playerItem)?.img ?? '';
    console.log(endpoint);
    return 'http://cdn.dota2.com' + endpoint;
  };

  getHeroName = playerHeroID => {
    return (
      Object.values(heroes).find(hero => hero.id === playerHeroID)
        ?.localized_name ?? ''
    );
  };

  render() {
    const {key, player} = this.props;
    return (
      <View>
        <Text>{this.getHeroName(player.hero_id)}</Text>
        <Image
          source={{uri: this.builtHeroIconURI(player.hero_id)}}
          style={{width: 40, height: 40}}
        />
        <Text>
          {player.kills}/{player.deaths}/{player.assists}
        </Text>
        <Image
          source={{uri: this.buildItemURI(player.item_0)}}
          style={{width: 40, height: 40}}
        />
        <Image
          source={{uri: this.buildItemURI(player.item_1)}}
          style={{width: 40, height: 40}}
        />
        <Image
          source={{uri: this.buildItemURI(player.item_2)}}
          style={{width: 40, height: 40}}
        />
        <Image
          source={{uri: this.buildItemURI(player.item_3)}}
          style={{width: 40, height: 40}}
        />
        <Image
          source={{uri: this.buildItemURI(player.item_4)}}
          style={{width: 40, height: 40}}
        />
        <Image
          source={{uri: this.buildItemURI(player.item_5)}}
          style={{width: 40, height: 40}}
        />
      </View>
    );
  }
}
