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

class Home extends Component {
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
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 33,
                textAlign: 'left',
                marginBottom: 16,
                marginTop: -100,
                color: '#FFFFFF',
                fontWeight: 'bold',
              }}
            >
              Requirements Include: {'\n'}
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 5,
                textAlign: 'left',
                color: '#FFFFFF',
                marginLeft: -185,
                fontWeight: 'bold',
              }}
            >
              - OND Minimum{'\n'}
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 5,
                marginLeft: -60,
                textAlign: 'left',
                color: '#FFFFFF',
                fontWeight: 'bold',
              }}
            >
              - Registered Nurse Certificate{'\n'}
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 5,
                marginLeft: -60,
                textAlign: 'left',
                color: '#FFFFFF',
                fontWeight: 'bold',
              }}
            >
              - 6 Months Hospital Experience{'\n'}
            </Text>
            {/* </Text> */}
          </View>

          <View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.buttonStyle}>
                <Button
                  title='Proceed'
                  type='clear'
                  titleStyle={{ color: 'white', fontWeight: 'bold' }}
                  onPress={() => navigate('FirstForm')}
                />
              </View>

              <View style={styles.buttonStyleReg}>
                <Button
                  title='Close'
                  titleStyle={{ color: '#FFFFFF', fontWeight: 'bold' }}
                  type='clear'
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
        <StatusBar style='light' />
      </ImageBackground>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
    alignContent: 'center',
    opacity: 0.9,
  },
  buttonStyle: {
    borderWidth: 1,
    color: '#FFFFFF',
    borderColor: '#0069FF',
    height: 50,
    width: 160,
    alignItems: 'center',
    borderRadius: 3,
    margin: '5%',
    padding: 5,
    marginBottom: 35,
    backgroundColor: '#0069FF',
    fontWeight: 'bold',
    flex: 1,
  },

  buttonStyleReg: {
    borderWidth: 1,
    color: '#FFFFFF',
    height: 50,
    width: 160,
    borderColor: 'red',
    alignItems: 'center',
    borderRadius: 3,
    margin: '5%',
    marginBottom: 35,
    padding: 5,
    backgroundColor: 'red',
    fontWeight: 'bold',
    flex: 1,
  },
});
