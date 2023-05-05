import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Increment, Decreament} from '../redux/actions/CountAction';
const HomeScreen = () => {
  const dispatch = useDispatch();

  const count = useSelector(store => store.count.count);

  const IncrementCounter = () => {
    dispatch(Increment());
  };

  const DecrementCounter = () => {
    dispatch(Decreament());
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={styles.textStyle}>Counter Redux</Text>
        <Text style={styles.input}>{count}</Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={IncrementCounter}>
          <Text style={styles.buttonTextStyle}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={DecrementCounter}>
          <Text style={styles.buttonTextStyle}>Decrement</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '30%',
    marginTop: 10,
    fontSize: 30,
    textAlign: 'center',
  },
  textStyle: {
    fontSize: 40,
    color: 'black',
    marginTop: 15,
  },
  buttonStyle: {
    height: 45,
    width: '30%',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'gray',
    marginTop: 10,
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
});
