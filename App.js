/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import heroes from 'dotaconstants/build/heroes.json';
import ExamplePlayers from './Examples/ExamplePlayers';
import ExampleMatches from './Examples/ExampleMatches';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Search from './screens/Search';
import Matches from './screens/Matches';

export default class App extends React.Component {
  state = {
    players: ExamplePlayers,
    player: {},
    matches: ExampleMatches,
    match: {},
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
    });
  };

  render() {
    const {players, player, matches, match, currentScreen} = this.state;

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
          <Matches matches={matches} onSelectMatch={this.onSelectMatch} />
        );
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

// {
//   /* <SafeAreaView>

//         </SafeAreaView> */
// }
