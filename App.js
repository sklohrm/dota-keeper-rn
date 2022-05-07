/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import heroes from 'dotaconstants/build/heroes.json';
import ExamplePlayers from './Examples/ExamplePlayers';
import ExampleMatches from './Examples/ExampleMatches';
import ExampleMatchDetails from './Examples/ExampleMatchDetails';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Search from './screens/Search';
import Matches from './screens/Matches';
import MatchDetail from './screens/MatchDetail';

export default class App extends React.Component {
  state = {
    players: ExamplePlayers,
    player: {},
    matches: ExampleMatches,
    match: {},
    matchDetails: ExampleMatchDetails,
    currentScreen: 'players',
  };

  onSelectPlayer = player => {
    this.setState({
      player: player,
      currentScreen: 'matches',
    });
  };

  onSelectMatch = match => {
    this.setState({
      match: match,
      currentScreen: 'matchDetails',
    });
  };

  onPressBackButton = toScreen => {
    this.setState({
      currentScreen: toScreen,
      player: {},
      match: {},
    });
  };

  render() {
    const {players, player, matches, match, matchDetails, currentScreen} =
      this.state;

    let screen;
    switch (currentScreen) {
      case '':
        screen = <Text>Hello World!</Text>;
        break;
      case 'players':
        screen = (
          <Search players={players} onSelectPlayer={this.onSelectPlayer} />
        );
        break;
      case 'matches':
        screen = (
          <Matches
            matches={matches}
            onSelectMatch={this.onSelectMatch}
            onPressBackButton={this.onPressBackButton}
          />
        );
        break;
      case 'matchDetails':
        screen = (
          <MatchDetail
            matchDetails={matchDetails}
            onPressBackButton={this.onPressBackButton}
          />
        );
        break;
      default:
        break;
    }

    return (
      <View>
        <SafeAreaView>{screen}</SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
