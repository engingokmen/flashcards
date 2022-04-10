import React from 'react';
import { Button, Icon, Layout, Text, MenuItem, OverflowMenu, Modal, Card } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import { QuizModal } from './QuizModal'

const iconItem = (props) => (
  <Icon {...props} name={props.name}/>
);


export const SetListItem = (props) => {
  const { title, description, navigation } = props

  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [visible, setVisible] = React.useState(false);
  const [visibleModal, setVisibleModal] = React.useState(false);

  const onItemSelect = (index) => {
    setSelectedIndex(index);
    setVisible(false);
  };

  const listMoreButton = () => (
    <Button accessoryLeft={iconItem({name: 'more-vertical'})} style={{marginLeft: 10}} size='tiny' onPress={() => setVisible(true)}></Button>
  );

  const modalClose = () => {
    setVisibleModal(false)
  }

  return (
    <Layout style={styles.setListItem}>
      <View>
        <Text style={styles.setListItemTitle}>{title}</Text>
        <Text style={styles.setListItemDescription}>{description}</Text>
      </View>
      <View style={styles.listButtons}>
        <Button accessoryLeft={iconItem({name: 'flash'})} size='tiny' onPress={() => setVisibleModal(true)}>Quiz</Button>
        {/* <ListMoreButton /> */}
        <OverflowMenu
          anchor={listMoreButton}
          visible={visible}
          selectedIndex={selectedIndex}
          onSelect={onItemSelect}
          onBackdropPress={() => setVisible(false)}>
          <MenuItem title='Edit'/>
          <MenuItem title='Delete'/>
          <MenuItem title='Set Card'/>
        </OverflowMenu>
      </View>
      <QuizModal navigation={navigation} modalClose={modalClose} visible={visibleModal} />
    </Layout>
  );
};


const styles = StyleSheet.create({
  setListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  setListItemTitle: {
    fontSize: 16
  },
  setListItemDescription: {
    fontSize: 14
  },
  listButtons: {
    flexDirection: 'row', 
  },
  // backdrop: {
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
  // },
  // modalCard: {
  //   minWidth: '90%'
  // },
  // modalCloseButton: {
  //   width: 26,
  //   height: 26
  // },
  // modalHeader: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between'
  // }
});