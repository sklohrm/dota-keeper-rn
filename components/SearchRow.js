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
  convertMatchTime = (time, format) => {
    const date = new Date(time);

    //extract the parts of the date
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    //replace the month
    format = format.replace('MM', month.toString().padStart(2, '0'));

    //replace the year
    if (format.indexOf('yyyy') > -1) {
      format = format.replace('yyyy', year.toString());
    } else if (format.indexOf('yy') > -1) {
      format = format.replace('yy', year.toString().substr(2, 2));
    }

    //replace the day
    format = format.replace('dd', day.toString().padStart(2, '0'));

    return 'Last Match: ' + format;
  };

  render() {
    const {player, onSelectPlayer} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => onSelectPlayer(player)}
          style={styles.row}>
          <View style={styles.player}>
            <Image source={{uri: player.avatarfull}} style={styles.image} />
            <View style={styles.textCol}>
              <Text style={styles.name}>{player.personaname}</Text>
              <Text style={styles.time}>
                {player.last_match_time
                  ? this.convertMatchTime(player.last_match_time, 'MM-dd-yyyy')
                  : ' '}
              </Text>
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
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
  },
  player: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  image: {width: 40, height: 40, borderRadius: 10},
  textCol: {paddingHorizontal: 5},
  name: {fontWeight: 'bold'},
  time: {fontSize: 10},
});
