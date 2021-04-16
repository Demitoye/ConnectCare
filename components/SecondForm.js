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

import * as Animatable from 'react-native-animatable';
import DropDownPicker from 'react-native-dropdown-picker';
import SelectBox from 'react-native-multi-selectbox';

const SecondForm = (props) => {
  const [selectedTeam, setSelectedTeam] = useState({});

  const [certificate, updateCertificate] = useState('');
  const [IELTS, updateIELTS] = useState('');
  const [qualified, updateQualified] = useState('');
  const [NMC, updateNMC] = useState('');
  const [CBT, updateCBT] = useState('');
  const [Discipline, updateDiscipline] = useState('');
  const [Experience, updateExperience] = useState('');
  const [Working, updateWorking] = useState('');
  const [Department, updateDepartment] = useState('');
  const [Relation, updateRelation] = useState('');
  const [Notice, updateNotice] = useState('');

  //   const [userGender, setUserGender] = useState('');
  const [gender, updateGender] = useState('');
  const [userDob, setUserDob] = useState('');
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const handleSubmitButton = () => {
    setErrortext('');
    if (!certificate) {
      alert('Please Select Certificate');
      return;
    }
    if (certificate === 'NONE') {
      //   alert('Please Select Certificate');
      // props.navigation.replace('Failed');

      props.navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Failed',
          },
        ],
      });
      return;
    }
    if (!IELTS) {
      alert('Please Select IELTS');
      return;
    }
    if (!qualified) {
      alert('Please Select Qualification');
      return;
    }

    if (!NMC) {
      alert('Please Select NMC');
      return;
    }
    if (!CBT) {
      alert('Please Select CBT');
      return;
    }

    if (!Discipline) {
      alert('Please Select Discipline');
      return;
    }

    if (!Experience) {
      alert('Please Select Hosiptal Experience');
      return;
    }
    if (Experience === 'NONE') {
      //   alert('Please Select Certificate');
      // props.navigation.replace('Failed');

      props.navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Failed',
          },
        ],
      });
      return;
    }

    if (!Working) {
      alert('Please Select Work');
      return;
    }

    if (!Department) {
      alert('Please Enter Work Department');
      return;
    }
    if (!Relation) {
      alert('Please Select Relation');
      return;
    }

    if (!Notice) {
      alert('Please Enter Success Notice');

      return;
    }

    const email = props.route.params.email;

    const url = 'https://kairosng.com/api/care/' + email;
    const UserMail =
      'https://kairosng.com/api/care/emailUser/Samtoye789@gmail.com';
    const AdminMail = 'https://kairosng.com/api/care/email/' + email;

    fetch(url, {
      method: 'PUT',
      //   body: formBody,
      body: JSON.stringify({
        certificate: certificate,
        IELTS: IELTS,
        Nurse: qualified,
        NMC: NMC,
        CBT: CBT,
        discipline: Discipline,
        experience: Experience,
        workingNurse: Working,
        department: Department,
        relation: Relation,
        notice: Notice,
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
            certificate: certificate,
            IELTS: IELTS,
            Nurse: qualified,
            NMC: NMC,
            CBT: CBT,
            discipline: Discipline,
            experience: Experience,
            workingNurse: Working,
            department: Department,
            relation: Relation,
            notice: Notice,
          })
        );
        console.log(url);
        console.log({ email });
        console.log(responseJson);

        if (!responseJson.error) {
          console.log(responseJson);
          console.log('Registration Successful.');

          fetch(UserMail, {
            method: 'GET',

            headers: {
              //Header Defination
              'content-type': 'application/json',
            },
          })
            .then((response) => response.json())
            .then((responseJson) => {
              if (!responseJson.error) {
                console.log('Mail Sent');
              }
            })

            .catch((error) => {
              console.error(error);
            });

          fetch(AdminMail, {
            method: 'GET',

            headers: {
              //Header Defination
              'content-type': 'application/json',
            },
          })
            .then((response) => response.json())
            .then((responseJson) => {
              if (!responseJson.error) {
                console.log('Mail Sent');
              }
            })
            .catch((error) => {
              console.error(error);
            });

          props.navigation.reset({
            index: 0,
            routes: [
              {
                name: 'Success',
              },
            ],
          });
        } else {
          setErrortext(responseJson.msg);
          alert('Try Again');
          console.log(responseJson.error);
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Check internet connection and try again');
      });
  };

  return (
    <Animatable.View
      animation='zoomIn'
      duration={1000}
      delay={400}
      useNativeDriver={true}
    >
      {/* <KeyboardAvoidingView behavior='padding'> */}
      <KeyboardAvoidingView>
        <StatusBar style='light' />
        <ScrollView>
          <View style={styles.formRow}>
            <Text
              style={{
                // margin: 2,
                margin: '2%',
                fontSize: 22,
                fontWeight: '500',
                flex: 1,
                padding: 5,
              }}
            >
              What certificate do you hold?
            </Text>
          </View>
          <DropDownPicker
            items={[
              { label: 'NONE ', value: 'NONE' },
              { label: 'OND ', value: 'OND' },
              { label: 'HND', value: 'HND' },
              { label: 'BSC', value: 'BSC' },
              { label: 'Masters', value: 'Masters' },
            ]}
            defaultIndex={0}
            zIndex={5000}
            style={{ paddingVertical: 10 }}
            placeholder='Select'
            containerStyle={{
              // For iphone
              // margin: '5%',
              // marginTop: 0,
              // marginBottom: '6%',
              // marginLeft: 10,
              // width: '90%',
              // height: '100%',
              // paddingBottom: '10%',

              // flex: 1,

              margin: '5%',
              margin: 0,
              marginBottom: '6%',
              marginLeft: '5%',
              width: '90%',
              height: '100%',
              flex: 1,
            }}
            style={{ backgroundColor: 'white' }}
            onChangeItem={(certificate) => updateCertificate(certificate.value)}
          />
          <View style={styles.formRow}>
            <Text
              style={{
                margin: 2,
                fontSize: 22,
                fontWeight: '500',
                flex: 1,
                padding: 5,
              }}
            >
              Have you passed IELTS exam?
            </Text>
          </View>

          <DropDownPicker
            items={[
              { label: 'Yes ', value: 'Yes' },
              { label: 'No', value: 'No' },
            ]}
            zIndex={5000}
            style={{ paddingVertical: 10 }}
            defaultIndex={0}
            placeholder='Select '
            containerStyle={{
              margin: '5%',
              margin: 0,
              marginBottom: '6%',
              marginLeft: '5%',
              width: '90%',
              height: '100%',
              flex: 1,
            }}
            onChangeItem={(IELTS) => updateIELTS(IELTS.value)}
          />

          <View style={styles.formRow}>
            <Text
              style={{
                margin: 2,
                fontSize: 22,
                fontWeight: '500',
                flex: 1,
                padding: 5,
              }}
            >
              Are you a qualified Registered Nurse?
            </Text>
          </View>

          <DropDownPicker
            items={[
              { label: 'Yes ', value: 'Yes' },
              { label: 'No', value: 'No' },
            ]}
            defaultIndex={0}
            placeholder='Select'
            containerStyle={{
              margin: '5%',
              margin: 0,
              marginBottom: '6%',
              marginLeft: '5%',
              width: '90%',
              height: '100%',
              flex: 1,
            }}
            onChangeItem={(qualified) => updateQualified(qualified.value)}
          />

          <View style={styles.formRow}>
            <Text
              style={{
                margin: 2,
                fontSize: 22,
                fontWeight: '500',
                flex: 1,
                padding: 5,
              }}
            >
              Have you registered with NMC?
            </Text>
          </View>

          <DropDownPicker
            items={[
              { label: 'Yes ', value: 'Yes' },
              { label: 'No', value: 'No' },
            ]}
            defaultIndex={0}
            placeholder='Select'
            containerStyle={{
              margin: '5%',
              margin: 0,
              marginBottom: '6%',
              marginLeft: '5%',
              width: '90%',
              height: '100%',
              flex: 1,
            }}
            onChangeItem={(NMC) => updateNMC(NMC.value)}
          />

          <View style={styles.formRow}>
            <Text
              style={{
                margin: 2,
                fontSize: 22,
                fontWeight: '500',
                flex: 1,
                padding: 5,
              }}
            >
              Have you passed CBT exam?
            </Text>
          </View>

          <DropDownPicker
            items={[
              { label: 'Yes ', value: 'Yes' },
              { label: 'No', value: 'No' },
            ]}
            defaultIndex={0}
            placeholder='Select'
            containerStyle={{
              margin: '5%',
              margin: 0,
              marginBottom: '6%',
              marginLeft: '5%',
              width: '90%',
              height: '100%',
              flex: 1,
            }}
            onChangeItem={(CBT) => updateCBT(CBT.value)}
          />

          <View style={styles.formRow}>
            <Text
              style={{
                margin: 2,
                fontSize: 22,
                fontWeight: '500',
                flex: 1,
                padding: 5,
              }}
            >
              What discipline are you?
            </Text>
          </View>

          <DropDownPicker
            items={[
              { label: 'RGN ', value: 'RGN' },
              { label: 'RMN', value: 'RMN' },
            ]}
            defaultIndex={0}
            placeholder='Select'
            containerStyle={{
              margin: '5%',
              margin: 0,
              marginBottom: '6%',
              marginLeft: '5%',
              width: '90%',
              height: '100%',
              flex: 1,
            }}
            onChangeItem={(Discipline) => updateDiscipline(Discipline.value)}
          />

          <View style={styles.formRow}>
            <Text
              style={{
                margin: 2,
                fontSize: 22,
                fontWeight: '500',
                flex: 1,
                padding: 5,
              }}
            >
              How many years of hospital experience do you have?
            </Text>
          </View>
          <DropDownPicker
            items={[
              { label: 'NONE ', value: 'NONE' },
              { label: '0 - 6 months ', value: '6 months' },
              { label: '0 - 1 year', value: '1 year' },
              { label: '0 - 5 years ', value: ' Above 5 years' },
            ]}
            defaultIndex={0}
            placeholder='Select'
            containerStyle={{
              margin: '5%',
              margin: 0,
              marginBottom: '6%',
              marginLeft: '5%',
              width: '90%',
              height: '100%',
              flex: 1,
            }}
            onChangeItem={(Experience) => updateExperience(Experience.value)}
          />

          <View style={styles.formRow}>
            <Text
              style={{
                margin: 2,
                fontSize: 22,
                fontWeight: '500',
                flex: 1,
                padding: 5,
              }}
            >
              Are you currently Working as a nurse?
            </Text>
          </View>

          <DropDownPicker
            items={[
              { label: 'Yes ', value: 'Yes' },
              { label: 'No', value: 'No' },
            ]}
            defaultIndex={0}
            placeholder='Select'
            containerStyle={{
              margin: '5%',
              margin: 0,
              marginBottom: '6%',
              marginLeft: '5%',
              width: '90%',
              height: '100%',
              flex: 1,
            }}
            onChangeItem={(Working) => updateWorking(Working.value)}
          />
          <View style={styles.formRow}>
            <Input
              label='In what department do you work in the hospital'
              labelStyle={{
                color: 'black',
                margin: 2,
                marginLeft: -5,
                fontSize: 18,
                fontWeight: '500',
                flex: 1,
              }}
              placeholder=' eg. Surgeon'
              keyboardType='default'
              autoCapitalize='sentences'
              returnKeyType='done'
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              onTintColor='#512DA8'
              onChangeText={(Department) => updateDepartment(Department)}
            />
          </View>
          <View style={styles.formRow}>
            <Text
              style={{
                margin: 2,
                fontSize: 22,
                fontWeight: '500',
                flex: 1,
                padding: 5,
              }}
            >
              Do you have a relation in Europe?
            </Text>
          </View>

          <DropDownPicker
            items={[
              { label: 'Yes ', value: 'Yes' },
              { label: 'No', value: 'No' },
            ]}
            defaultIndex={0}
            placeholder='Select'
            containerStyle={{
              margin: '5%',
              margin: 0,
              marginBottom: '6%',
              marginLeft: '5%',
              width: '90%',
              height: '100%',
              flex: 1,
            }}
            onChangeItem={(Relation) => updateRelation(Relation.value)}
          />
          <View style={styles.formRow}>
            <Input
              label='How much notice do you need to give if you become successful'
              labelStyle={{
                color: 'black',
                margin: 2,
                marginLeft: -5,
                fontSize: 18,
                fontWeight: '500',
                flex: 1,
              }}
              placeholder=' eg. 2 Month'
              keyboardType='default'
              autoCapitalize='sentences'
              returnKeyType='done'
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              onTintColor='#512DA8'
              onChangeText={(Notice) => updateNotice(Notice)}
            />
          </View>

          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}
          >
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </Animatable.View>
  );
};
export default SecondForm;

const styles = StyleSheet.create({
  formRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 10,
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
    marginTop: 15,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingVertical: 10,
    fontSize: 16,
  },
});
