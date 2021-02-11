import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput as Input} from 'react-native-paper';
import {AppColor, AppStrings} from '../../utils/';
import {Button} from 'react-native-paper';
import UserDetailsStyles from '../UserList/UserDetailsStyles';

type Props = React.ComponentProps<typeof Input> & {errorText?: string};

const TextInput = ({errorText, ...props}: Props) => (
  <View style={styles.container}>
    <Input
      label="email"
      placeholder="enter email"
      placeholderTextColor={AppColor.pink}
      style={styles.input}
      selectionColor={AppColor.white}
      mode="flat"
      underlineColor="transparent"
      {...props}
    />
    <Input
      label="password"
      placeholder="enter password"
      placeholderTextColor={AppColor.pink}
      style={styles.input}
      selectionColor={AppColor.white}
      underlineColor="transparent"
      mode="flat"
      {...props}
    />
    <Input
      label="password"
      placeholder="enter password"
      placeholderTextColor={AppColor.pink}
      style={styles.input}
      selectionColor={AppColor.white}
      underlineColor="transparent"
      mode="flat"
      {...props}
    />
    <Button
      style={{padding: 5, marginTop: 20, backgroundColor: AppColor.pink}}
      raised
      theme={{
        roundness: 13,
      }}>
      <Text style={{color: AppColor.white, fontSize: 15}}>Login</Text>
    </Button>

    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: AppColor.lightGrey,
    margin: 8,
  },
  error: {
    fontSize: 14,
    color: AppColor.black,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default TextInput;
