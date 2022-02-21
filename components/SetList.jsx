import React from 'react';
import { Button, Icon, List, ListItem, Layout} from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const data = new Array(8).fill({
  title: 'Set item',
  description: 'Description for Set',
});

export const SetList = () => {

  const iconItem = (props) => (
    <Icon {...props} name={props.name}/>
  );
  

  const actionItems = () => {
    return(
      <>
        <Button accessoryLeft={iconItem({name: 'flash'})} size='tiny'>Quiz</Button>
        <Button accessoryLeft={iconItem({name: 'more-vertical'})} style={{marginLeft: 10}} size='tiny'></Button>
      </>
    )
  }
  
  const setItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryRight={actionItems}
    />
  );

  return (
    <>
      <List
        style={styles.setList}
        data={data}
        renderItem={setItem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  setList: {
    minHeight: '100%'
  },
  setListMenu: {
    minHeight: 144,
  }
});