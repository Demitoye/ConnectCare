import React, { Component, BackHandler } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
  backgroundImage,
  Alert,
} from 'react-native';
import { Button, Text } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import ConfettiCannon from 'react-native-confetti-cannon';

class Success extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        source={require('../assets/nurses2.png')}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
          opacity: 0.9,
        }}
        imageStyle={{ resizeMode: 'cover' }}
      >
        <View style={styles.mainBody}>
          <StatusBar style='light' />
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ConfettiCannon count={250} origin={{ x: -100, y: 0 }} />
            <Image
              style={{ width: 120, height: 120 }}
              source={{
                uri: 'https://img.icons8.com/color/70/000000/facebook-like.png',
              }}
            />
            <Text
              style={{
                fontSize: 23,
                textAlign: 'left',
                marginBottom: 16,
                marginTop: -5,
                margin: 5,
                padding: 15,
                color: '#FFFFFF',
                fontWeight: 'bold',
                justifyContent: 'flex-end',
              }}
            >
              Congratulations! Your preapplication has been successful. You
              should get an email with a link advising you of the next stage.
            </Text>

            {/* </Text> */}
          </View>

          <View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.buttonStyle}>
                <Button
                  title='Home'
                  type='clear'
                  titleStyle={{ color: 'white', fontWeight: 'bold' }}
                  onPress={() => navigate('Home')}
                />
              </View>
              <View style={styles.buttonStyle}>
                <Button
                  title='Exit'
                  type='clear'
                  titleStyle={{ color: 'white', fontWeight: 'bold' }}
                  onPress={() => {
                    Alert.alert(
                      'Exit',
                      'Are you sure?',
                      [
                        ,
                        {
                          text: 'Confirm',
                          onPress: () => {
                            BackHandler.exitApp();
                          },
                        },
                        {
                          text: 'Cancel',
                          onPress: () => {
                            return null;
                          },
                        },
                      ],
                      { cancelable: false }
                    );
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Success;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#888888',
    alignContent: 'center',
    opacity: 0.9,
  },
  buttonStyle: {
    borderWidth: 1,
    color: '#FFFFFF',
    borderColor: 'white',
    height: 45,
    width: 160,
    alignItems: 'center',
    borderRadius: 3,
    margin: 20,
    padding: 4,
    marginBottom: 29,
    backgroundColor: '#0067f4',
    fontWeight: 'bold',
    flex: 1,
  },

  buttonStyleReg: {
    borderWidth: 1,
    color: '#0067f4',
    flex: 1,
    height: 45,
    width: 160,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 3,
    margin: 12,
    marginBottom: 29,
    padding: 4,
    backgroundColor: '#FFFFFF',
    fontWeight: 'bold',
  },
});
