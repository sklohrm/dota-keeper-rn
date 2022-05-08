import * as React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

import items from 'dotaconstants/build/items.json';
import heroes from 'dotaconstants/build/heroes.json';

export default class MatchDetailRow extends React.Component {
  buildHeroIconURI = playerHeroID => {
    endpoint =
      Object.values(heroes).find(hero => hero.id === playerHeroID)?.icon ?? '';
    return 'http://cdn.dota2.com' + endpoint;
  };

  buildItemURI = playerItem => {
    endpoint =
      Object.values(items).find(item => item.id === playerItem)?.img ?? '';
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
      <View style={styles.row}>
        <View style={styles.flexColumn}>
          <Text style={styles.heroName}>
            {this.getHeroName(player.hero_id)}
          </Text>
          <Image
            source={{uri: this.buildHeroIconURI(player.hero_id)}}
            style={styles.icon}
          />
        </View>
        <View style={styles.flexColumn}>
          <Text>
            {player.kills}/{player.deaths}/{player.assists}
          </Text>
          <Text>GPM {player.gold_per_min}</Text>
          <Text>XPM {player.xp_per_min}</Text>
        </View>
        <View style={styles.flexColumn}>
          <View style={styles.flexRow}>
            <Image
              source={{uri: this.buildItemURI(player.item_0)}}
              style={styles.item}
            />
            <Image
              source={{uri: this.buildItemURI(player.item_1)}}
              style={styles.item}
            />
            <Image
              source={{uri: this.buildItemURI(player.item_2)}}
              style={styles.item}
            />
          </View>
          <View style={styles.flexRow}>
            <Image
              source={{uri: this.buildItemURI(player.item_3)}}
              style={styles.item}
            />
            <Image
              source={{uri: this.buildItemURI(player.item_4)}}
              style={styles.item}
            />
            <Image
              source={{uri: this.buildItemURI(player.item_5)}}
              style={styles.item}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginTop: 5,
    marginHorizontal: 5,
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  icon: {width: 40, height: 40, marginLeft: 5},
  item: {width: 40, height: 40, margin: 1},
  heroName: {fontWeight: 'bold', paddingBottom: 10},
});
