import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Picker,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Input, Icon } from 'react-native-elements';
import SelectBox from 'react-native-multi-selectbox';
import * as Animatable from 'react-native-animatable';
import DropDownPicker from 'react-native-dropdown-picker';

const FirstForm = (props) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  //   const [userGender, setUserGender] = useState('');
  const [gender, updateGender] = useState('');
  const [userDob, setUserDob] = useState('');
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState({});

  const emailInputRef = createRef();
  const phoneInputRef = createRef();
  const addressInputRef = createRef();
  const dobInputRef = createRef();

  const K_OPTIONS = [
    {
      item: 'Male',
    },
    {
      item: 'Female',
    },
  ];

  // function SelectboxExample() {
  //   const [selectedTeam, setSelectedTeam] = useState({});

  //   return (
  //     <View
  //       style={{
  //         fontWeight: 'bold',
  //         margin: 5,
  //         marginTop: -10,

  //         width: '100%',
  //         flex: 1,
  //       }}
  //     >
  //       <SelectBox
  //         label='Select Gender'
  //         options={K_OPTIONS}
  //         value={selectedTeam}
  //         onChange={onChange()}
  //         hideInputFilter={true}
  //         // placeholder=''
  //         // containerStyle={{
  //         //   height: 50,
  //         //   margin: 5,
  //         //   marginTop: -15,
  //         //   marginBottom: 5,
  //         //   marginLeft: 60,
  //         //   width: '60%',
  //         // }}

  //         labelStyle={{ color: 'black', fontSize: 18, fontWeight: 'normal' }}
  //         containerStyle={{
  //           fontSize: 26,
  //           borderTopLeftRadius: 10,
  //           borderTopRightRadius: 10,
  //           borderBottomLeftRadius: 10,
  //           borderBottomRightRadius: 10,
  //         }}
  //         optionsLabelStyle={{
  //           color: '#022b69',
  //           fontSize: 18,
  //           fontWeight: 'normal',
  //           borderBottomLeftRadius: 20,
  //           borderBottomRightRadius: 20,
  //         }}
  //         selectedItemStyle={{
  //           color: 'black',
  //           fontSize: 18,
  //           fontWeight: 'normal',
  //         }}
  //       />
  //       {/*
  //       <Example />
  //       <View style={{ height: 40 }} /> */}
  //     </View>
  //   );

  //   function onChange() {
  //     return (val) => setSelectedTeam(val.item);
  //   }
  // }

  // const onChange = () => {
  //   return (gender) => updateGender(gender.item);
  // };

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill Name');
      return;
    }
    if (!userDob) {
      alert('Select Date Of Birth');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }

    if (!userPhone) {
      alert('Please fill Phone Number');
      return;
    }
    if (!selectedTeam) {
      alert('Please Select Gender');
      return;
    }

    var dataToSend = {
      name: userName,
      dob: userDob,
      email: userEmail,
      telephone: userPhone,
      gender: selectedTeam,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('https://kairosng.com/api/care/create', {
      method: 'POST',
      body: JSON.stringify({
        name: userName,
        dob: userDob,
        email: userEmail,
        telephone: userPhone,
        gender: selectedTeam.item,
      }),
      headers: {
        //Header Defination

        'content-type': 'application/json',
        accept: 'application/json',
      },
    })
      .then((response) => response.json())

      .then((responseJson) => {
        console.log(
          JSON.stringify({
            name: userName,
            dob: userDob,
            email: userEmail,
            telephone: userPhone,
            gender: selectedTeam.item,
          })
        );
        console.log(responseJson);
        props.navigation.replace('SecondForm');
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          //   setIsRegistraionSuccess(true);
          console.log(response);
          console.log('Registration Successful. Please Login to proceed');

          navigation.replace('SecondForm', { email: userEmail });
        } else {
          setErrortext(responseJson.msg);
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Check internet connection and try again');
      });
  };
  //   if (isRegistraionSuccess) {
  //     return (
  //       <View
  //         style={{
  //           flex: 1,
  //           backgroundColor: '#307ecc',
  //           justifyContent: 'center',
  //         }}
  //       >
  //         <Text style={styles.successTextStyle}>Registration Successful</Text>
  //         <TouchableOpacity
  //           style={styles.buttonStyle}
  //           activeOpacity={0.5}
  //           onPress={() => props.navigation.navigate('LoginScreen')}
  //         >
  //           <Text style={styles.buttonTextStyle}>Login Now</Text>
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   }

  const onChange = () => {
    return (val) => setSelectedTeam(val);
  };
  return (
    <KeyboardAvoidingView style={{ margin: 10 }} behavior='padding'>
      <Animatable.View
        animation='zoomIn'
        duration={1000}
        delay={500}
        useNativeDriver={true}
      >
        <StatusBar style='light' />
        <ScrollView>
          <View style={styles.formRow}>
            <Input
              label=' NAME'
              placeholder='Jane Doe'
              labelStyle={{ color: 'black', fontWeight: '600' }}
              keyboardType='default'
              autoCapitalize='sentences'
              returnKeyType='done'
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              onTintColor='#512DA8'
              onChangeText={(UserName) => setUserName(UserName)}
              leftIcon={<Icon size={24} name='person' />}
            />
          </View>

          <View style={styles.formRow}>
            <Input
              label=' DATE OF BIRTH'
              labelStyle={{ color: 'black', fontWeight: '600' }}
              placeholder='4th-March-2021'
              keyboardType='email-address'
              returnKeyType='done'
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              onChangeText={(userDob) => setUserDob(userDob)}
              ref={dobInputRef}
              onTintColor='#512DA8'
              leftIcon={
                <Icon size={24} name='calendar' color='black' type='evilicon' />
              }
            />
          </View>

          <View style={styles.formRow}>
            <Input
              styles={styles.formLabel}
              label=' EMAIL'
              labelStyle={{ color: 'black', fontWeight: '600' }}
              placeholder='email@address.com'
              keyboardType='email-address'
              returnKeyType='done'
              ref={emailInputRef}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              onSubmitEditing={Keyboard.dismiss}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              onTintColor='#512DA8'
              leftIcon={<Icon size={24} name='email' />}
            />
          </View>
          <View style={styles.formRow}>
            <Input
              labelStyle={{ color: 'black', fontWeight: '600' }}
              label='TELEPHONE NUMBER'
              placeholder='08000000000'
              keyboardType='phone-pad'
              returnKeyType='done'
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              onChangeText={(userPhone) => setUserPhone(userPhone)}
              onSubmitEditing={Keyboard.dismiss}
              ref={phoneInputRef}
              onTintColor='#512DA8'
              leftIcon={<Icon size={24} name='phone' />}
            />
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              flexDirection: 'row',
              margin: 25,
              marginTop: -10,
              marginBottom: -5,
              fontFamily: 'Arial',
            }}
          >
            <SelectBox
              label='GENDER'
              options={K_OPTIONS}
              value={selectedTeam}
              onChange={(gender) => setSelectedTeam(gender)}
              hideInputFilter={true}
              // placeholder=''

              labelStyle={{
                color: 'black',
                fontSize: 18,
                fontWeight: '600',
                flex: 1,
              }}
              containerStyle={{
                fontSize: 26,
                height: 50,
                margin: 5,
                flex: 1,
                marginBottom: 5,

                width: '100%',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderRadius: 5,
              }}
              optionsLabelStyle={{
                color: 'black',
                fontSize: 18,
                fontWeight: 'normal',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
              selectedItemStyle={{
                color: 'black',
                fontSize: 18,
                fontWeight: '400',
                borderRadius: 5,
              }}
            />
          </View>

          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}
          >
            <Text style={styles.buttonTextStyle}>PROCEED</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animatable.View>
    </KeyboardAvoidingView>
  );
};
export default FirstForm;

const styles = StyleSheet.create({
  formRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 15,
    fontFamily: 'Arial',
  },
  formLabel: {
    fontSize: 18,
    flex: 2,
  },
  formItem: {
    flex: 1,
  },
  modal: {
    justifyContent: 'center',
    margin: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#512DA8',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#0069FF',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
    width: '90%',
    marginLeft: '5%',
    marginRight: 18,
    marginTop: 70,
    marginBottom: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingVertical: 10,
    fontSize: 16,
  },
});

// const styles = StyleSheet.create({
//   SectionStyle: {
//     flexDirection: 'row',
//     height: 40,
//     marginTop: 20,
//     marginLeft: 35,
//     marginRight: 35,
//     margin: 10,
//   },
//   buttonStyle: {
//     backgroundColor: '#7DE24E',
//     borderWidth: 0,
//     color: '#FFFFFF',
//     borderColor: '#7DE24E',
//     height: 40,
//     alignItems: 'center',
//     borderRadius: 30,
//     marginLeft: 35,
//     marginRight: 35,
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   buttonTextStyle: {
//     color: '#FFFFFF',
//     paddingVertical: 10,
//     fontSize: 16,
//   },
//   inputStyle: {
//     flex: 1,
//     color: 'white',
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderWidth: 1,
//     borderRadius: 30,
//     borderColor: '#dadae8',
//   },
//   errorTextStyle: {
//     color: 'red',
//     textAlign: 'center',
//     fontSize: 14,
//   },
//   successTextStyle: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 18,
//     padding: 30,
//   },
// });
