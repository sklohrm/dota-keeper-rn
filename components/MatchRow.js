import * as React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

import heroes from 'dotaconstants/build/heroes.json';
import gameModes from 'dotaconstants/build/game_mode.json';

export default class MatchRow extends React.Component {
  // Takes the hero_id of player and returns the matching name in heroes.json.
  getHeroName = playerHeroID => {
    return (
      Object.values(heroes).find(hero => hero.id === playerHeroID)
        ?.localized_name ?? ''
    );
  };

  //Takes the match_id of the match and returns the matching name in gameModes.json.
  getGameMode = currentGameMode => {
    return (
      Object.values(gameModes)
        .find(gameMode => gameMode.id === currentGameMode)
        ?.name.replace('game_mode_', ' ')
        .replace('_', ' ')
        .toUpperCase() ?? ''
    );
  };

  // Takes hero_id of player and creates a URI for the image after finding
  // the appropriate endpoint in heroes.json
  buildHeroIconURI = playerHeroID => {
    endpoint =
      Object.values(heroes).find(hero => hero.id === playerHeroID)?.img ?? '';
    return 'http://cdn.dota2.com' + endpoint;
  };

  //Converts match duration from SS to MM:SS
  secondsToHms = value => {
    return Math.floor(value / 60) + ':' + (value % 60 ? value % 60 : '00');
  };

  //Converts match start time to a more compat format.
  convertMatchTime = (time, format) => {
    var d = new Date(time * 1000),
      yyyy = d.getFullYear(),
      mm = ('0' + (d.getMonth() + 1)).slice(-2),
      dd = ('0' + d.getDate()).slice(-2),
      hh = d.getHours(),
      h = hh,
      min = ('0' + d.getMinutes()).slice(-2),
      ampm = 'AM',
      time;

    if (hh > 12) {
      h = hh - 12;
      ampm = 'PM';
    } else if (hh === 12) {
      h = 12;
      ampm = 'PM';
    } else if (hh == 0) {
      h = 12;
    }

    time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
    return time;
  };

  render() {
    const {match, onSelectMatch} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => onSelectMatch(match)}>
          <View style={styles.row}>
            <View style={styles.statsContainer}>
              <Image
                source={{uri: this.buildHeroIconURI(match.hero_id)}}
                style={styles.image}
              />
              <View style={styles.statsCol}>
                <Text>{this.getHeroName(match.hero_id)}</Text>
                <Text>
                  {match.kills}/{match.deaths}/{match.assists}
                </Text>
              </View>
            </View>
            <View style={styles.matchCol}>
              <View style={styles.matchColItem}>
                <Text>{this.convertMatchTime(match.start_time)}</Text>
              </View>
              <View style={styles.matchColItem}>
                <Text>{this.secondsToHms(match.duration)}</Text>
              </View>
              <View style={styles.matchColItem}>
                <Text>{this.getGameMode(match.game_mode)}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginTop: 5,
    marginHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  image: {width: 40, height: 40, borderRadius: 10},
  statsCol: {paddingHorizontal: 5},
  matchCol: {paddingVertical: 5, paddingHorizontal: 5},
  matchColItem: {flexDirection: 'row', justifyContent: 'flex-end'},
});
