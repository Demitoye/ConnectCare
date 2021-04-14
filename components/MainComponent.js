// import React, { Component } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from './HomeComponent';
// import { View } from 'react-native';

// // const Stack = createStackNavigator();

// // class Main extends Component {
// //   render() {
// //     return (
// //       <View>
// //         <NavigationContainer>
// //           <Stack.Navigator>
// //             <Stack.Screen name='Home' component={Home} />
// //           </Stack.Navigator>
// //         </NavigationContainer>
// //       </View>
// //     );
// //   }
// // }

// // export default Main;

// const Stack = createStackNavigator();

// export default function Main() {
//   return (
//     <View>
//       <StatusBar style='dark' />
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName='Home'>
//           {/* SplashScreen which will come once */}

//           <Stack.Screen
//             name='Home'
//             component={Home}
//             options={{
//               title: 'Home', //Set Header Title
//               headerStyle: {
//                 backgroundColor: '#0067f4', //Set Header color
//               },
//               headerTintColor: '#fff', //Set Header text color
//               headerTitleStyle: {
//                 fontWeight: 'bold', //Set Header text style
//               },
//             }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </View>
//   );
// }

import * as React from 'react';

import {
  TextInput,
  ScrollView,
  SafeAreaView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
  backgroundImage,
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Home from './HomeComponent';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

// function HomeScreen({ navigation }) {
//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#0069FF',
//         color: '#FFFFFF',
//       }}
//     >
//       <StatusBar style='light' />

//       <Image
//         source={require('./Image/rentwise.png')}
//         style={{
//           width: '100%',
//           height: 65,
//           resizeMode: 'contain',
//           marginTop: 100,
//           marginBottom: 0,
//         }}
//       />

//       <View
//         style={{
//           flex: 1,
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Text
//           style={{
//             fontSize: 18,
//             textAlign: 'center',
//             marginBottom: 16,
//             color: '#abb4ed',
//             fontWeight: 'bold',
//           }}
//         >
//           <Text
//             h1
//             style={{
//               fontSize: 43,
//               textAlign: 'center',
//               color: '#FFFFFF',
//               fontWeight: 'bold',
//             }}
//           >
//             Build Wealth, the smart way.
//           </Text>{' '}
//           {'\n'} {'\n'} Save and invest with Rentwise,the only wealth management
//           app you really need.
//         </Text>
//       </View>

//       <View>
//         <View style={{ flexDirection: 'row' }}>
//           <View style={styles.buttonStyle}>
//             <Button
//               title=' LOG IN'
//               type='clear'
//               titleStyle={{ color: 'white', fontWeight: 'bold' }}
//               onPress={() => navigation.navigate('Details')}
//             />
//           </View>

//           <View style={styles.buttonStyleReg}>
//             <Button
//               title='SIGN UP'
//               titleStyle={{ color: '#0067f4', fontWeight: 'bold' }}
//               type='clear'
//               onPress={() => navigation.navigate('settings')}
//             />
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

const Stack = createStackNavigator();

export default function Main() {
  return (
    <View style={styles.mainBody}>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          {/* SplashScreen which will come once */}
          <Stack.Screen
            name='Home'
            component={Home}
            // Hiding header for Splash Screen
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0067f4',
    alignContent: 'center',
  },
  buttonStyle: {
    borderWidth: 1,
    color: '#FFFFFF',
    borderColor: 'white',
    height: 45,
    width: 160,
    alignItems: 'center',
    borderRadius: 3,
    margin: 12,
    padding: 4,
    marginBottom: 29,
    backgroundColor: '#0067f4',
    fontWeight: 'bold',
  },

  buttonStyleReg: {
    borderWidth: 1,
    color: '#0067f4',
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
