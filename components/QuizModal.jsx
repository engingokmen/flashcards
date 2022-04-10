import React from 'react';
import { Button, Icon, Text, Modal, Card } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

const iconItem = (props) => (
  <Icon {...props} name={props.name}/>
);

export const QuizModal = ({visible, modalClose, navigation}) => {
  const pressQuiz = (type) => {
    navigation.navigate(type)
    modalClose()
  }
  return(
    <Modal
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={modalClose}
      >
      <Card style={styles.modalCard} disabled={true}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Quiz</Text>
          <Button style={styles.modalCloseButton} onPress={modalClose} accessoryLeft={iconItem({name: 'close'})} size="tiny" />
        </View>
        <View>
          <Button onPress={() => pressQuiz('FlashCard')} style={styles.modalButton} accessoryLeft={iconItem({name: 'sync-outline'})} size="medium">Classic Flashcard</Button>
          <Button onPress={() => pressQuiz('MultipleChoice')} style={styles.modalButton} accessoryLeft={iconItem({name: 'checkmark-circle-2-outline'})} size="medium">Multiple Choice</Button>
        </View>
      </Card>
    </Modal>
  )
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalCard: {
    minWidth: '90%',
  },
  modalTitle: {
    fontSize: 18,
  },
  modalCloseButton: {
    width: 26,
    height: 26
  },
  modalButton: {
    justifyContent: 'flex-start',
    marginTop: 14
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});