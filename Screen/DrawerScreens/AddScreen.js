// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
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
} from 'react-native';
import UploadImage from '../Components/UploadImage';
import AsyncStorage from '@react-native-async-storage/async-storage'

import Loader from '../Components/Loader';

const AddScreen = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [color, setColor] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [
    isPostSuccess,
    setIsPostSuccess
  ] = useState(false);

  const titleInputRef = createRef();
  const contentInputRef = createRef();
  const sexInputRef = createRef();
  const ageInputRef = createRef();
  const locationInputRef = createRef();
  const colorInputRef = createRef();
  const nameInputRef = createRef();


  const handleSubmitButton = async () => {

    var token = await AsyncStorage.getItem('token')
    console.log(token)

    setErrortext('');
    if (!title) {
      alert('Please fill title');
      return;
    }
    if (!content) {
      alert('Please fill content');
      return;
    }
    if (!sex) {
      alert('Please fill sex');
      return;
    }
    if (!age) {
      alert('Please fill age');
      return;
    }
    if (!location) {
      alert('Please fill location');
      return;
    }
    if (!color) {
      alert('Please fill color');
      return;
    }
    if (!name) {
      alert('Please fill name');
      return;
    } 
    //Show Loader
    setLoading(true);
    var dataToSend = {
      title: title,
      content: content,
      sex: sex,
      age: age,
      location: location,
      color: color,
      name: name
    };
    //var formBody = [];
    // for (var key in dataToSend) {
    //   var encodedKey = encodeURIComponent(key);
    //   var encodedValue = encodeURIComponent(dataToSend[key]);
    //   formBody.push(encodedKey + '=' + encodedValue);
    // }
    // formBody = formBody.join('&');

    fetch('http://10.0.3.2:8080/api/v1/posts', {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        //Header Defination
        'Accept': "application/json",
        'Content-Type': "application/json",
        'Authorization': 'Bearer ' +token,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          setIsPostSuccess(true);
          console.log(
            'Post submitted Successful. Please Login to proceed'
          );
        } else {
          setErrortext(responseJson.msg);
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
  if (isPostSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../Image/success.png')}
          style={{
            height: 150,
            resizeMode: 'contain',
            alignSelf: 'center'
          }}
        />
        <Text style={styles.successTextStyle}>
          Item submitted Successful
        </Text>     
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('AddScreen')}>
          <Text style={styles.buttonTextStyle}>Okay</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: '#307ecc'}}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../Image/aboutreact.png')}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(title) => setTitle(title)}
              underlineColorAndroid="#f000"
              placeholder="What did you lost?"
              placeholderTextColor="#8b9cb5"
              // autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                titleInputRef.current && titleInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(content) => setContent(content)}
              underlineColorAndroid="#f000"
              placeholder="Brief description"
              placeholderTextColor="#8b9cb5"
              keyboardType="default"
              ref={contentInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                contentInputRef.current &&
                contentInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(sex) => setSex(sex)}
              underlineColorAndroid="#f000"
              placeholder="what gender?"
              placeholderTextColor="#8b9cb5"
              keyboardType="default"
              ref={sexInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                sexInputRef.current &&
                sexInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(age) => setAge(age)}
              underlineColorAndroid="#f000"
              placeholder="enter age"
              placeholderTextColor="#8b9cb5"
              keyboardType="default"
              ref={ageInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                ageInputRef.current &&
                ageInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(location) => setLocation(location)}
              underlineColorAndroid="#f000"
              placeholder="what is the last location?"
              placeholderTextColor="#8b9cb5"
              keyboardType="default"
              ref={locationInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                locationInputRef.current &&
                locationInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(color) => setColor(color)}
              underlineColorAndroid="#f000"
              placeholder="What color?"
              placeholderTextColor="#8b9cb5"
              keyboardType="default"
              ref={colorInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                colorInputRef.current &&
                colorInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(name) => setName(name)}
              underlineColorAndroid="#f000"
              placeholder="Enter the name of the item/person"
              placeholderTextColor="#8b9cb5"
              keyboardType="default"
              ref={nameInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                nameInputRef.current &&
                nameInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
        <UploadImage />

          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>ADD</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default AddScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});
