import { useState } from 'react';
import { Layout, Input, Card, Text } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

export const CreateSetItem = () => {
  const [term, setTerm] = useState('');
  const [definition, setDefinition] = useState('');

  return(
    <Layout style={styles.createSetItem}>
      <Card>
        <Text style={styles.cardTitle}>Card 1</Text>
        <Input
          placeholder='Term'
          value={term}
          onChangeText={x => setTerm(x)}
          style={{marginBottom: 10}}
        />
        <Input
          placeholder='Definition'
          value={definition}
          onChangeText={x => setDefinition(x)}
          style={{marginBottom: 10}}
        />
      </Card>
    </Layout>
  )
}

const styles = StyleSheet.create({
  createSet: {
    flex: 1, 
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '600'
  }
})