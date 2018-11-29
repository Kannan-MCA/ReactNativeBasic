import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

      <RadialGradient style={{flex:1}}
                        colors={['#FFB028']}
                        stops={[0.1,0.4,0.3,0.75]}
                        center={[180,300]}
                        radius={2000}>
           <View>
       
       </View>
</RadialGradient>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
