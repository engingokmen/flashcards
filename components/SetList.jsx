import React from 'react';
import { Button, Icon, Layout, Text } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SetListItem } from './SetListItem'

const data = new Array(8).fill({
  title: 'Set item',
  description: 'Description for Set',
});

export const SetList = ({navigation}) => {

  const arrayList = []

  for (let i = 0; i < data.length; i++){
    arrayList.push(
      <SetListItem navigation={navigation} title={data[0].title} description={data[0].description} style={styles.setListItem} key={`list_${i}`} />
    );
  }

  return (
    <>
      <Layout style={styles.container}>
        <ScrollView>
          {arrayList}
        </ScrollView>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%'
  },
  setListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
    // borderRadius: 5,
    // borderWidth: 1,
    // borderColor: '#cccccc'
  },
  setListItemTitle: {
    fontSize: 16
  },
  setListItemDescription: {
    fontSize: 14
  },
  listButtons: {
    flexDirection: 'row', 
  }
});