import React, { useState } from 'react';
import { TouchableWithoutFeedback, StyleSheet, View } from 'react-native';
import { Layout, Input, Divider, Button, Icon } from '@ui-kitten/components';
import { SetList } from '../../components/SetList'

export const Home = () => {
  const [value, setValue] = useState('');

  const IconList = (props) => (
    <Icon {...props} name="grid"/>
  );

  const IconFilter = (props) => (
    <Icon {...props} name="funnel"/>
  );

  const removeIcon = (props) => (
    <TouchableWithoutFeedback onPress={() => setValue('')}>
      <Icon {...props} name="close-circle"/>
    </TouchableWithoutFeedback>
  );



  return (
    <Layout style={styles.layout}>
      <View style={styles.searchBox}>
        <Input
          placeholder='Search'
          value={value}
          style={styles.searchInput}
          accessoryRight={value.length ? removeIcon : ''}
          onChangeText={nextValue => setValue(nextValue)}
        />
        <Button style={styles.button} accessoryLeft={IconList} />
        <Button style={styles.button} accessoryLeft={IconFilter} />
      </View>
      <Divider />

      <SetList />
    </Layout>
  )
}


const styles = StyleSheet.create({
  layout: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    width: '100%',
    flex: 1,
    marginBottom: 10
  },
  searchBox: {
    flexDirection: 'row'
  },
  button: {
    height: 20,
    width: 30,
    marginLeft: 5
  },
  removeIcon: {
  }
});