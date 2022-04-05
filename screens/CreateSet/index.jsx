import { useState } from 'react';
import { Layout, Input, Icon, Button } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import { CreateSetItem } from '../../components/CreateSetItem'

export const CreateSet = () => {
  const [cardSetName, setCardSetName] = useState('');
  const [cardSetDescription, setcardSetDescription] = useState('');

  const iconItem = (props) => (
    <Icon {...props} name={props.name}/>
  );

  return(
    <Layout style={styles.createSet}>
      <View style={styles.setName}>
        {/* <Text category='h6'>Create Set</Text> */}
        <Input
          placeholder='Set Name'
          value={cardSetName}
          onChangeText={x => setCardSetName(x)}
          style={{marginBottom: 10}}
        />
        <Input
          placeholder='Description'
          value={cardSetDescription}
          onChangeText={x => setcardSetDescription(x)}
          style={{marginBottom: 10}}
        />
      </View>
      <CreateSetItem />
      <Button style={styles.addButton} accessoryLeft={iconItem({name: 'plus'})}>Add Card</Button>
    </Layout>
  )
}

const styles = StyleSheet.create({
  createSet: {
    flex: 1, 
    padding: 10,
  },
  addButton: {
    marginTop: 10
  }
})