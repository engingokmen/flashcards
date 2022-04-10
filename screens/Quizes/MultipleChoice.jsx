import { Layout, Text } from '@ui-kitten/components';
import { HeaderNavigation } from '../../components/HeaderNavigation'
import { StyleSheet } from 'react-native';

export const MultipleChoice = ({navigation}) => (
  <Layout style={styles.container}>
    <HeaderNavigation navigation={navigation} title="Multiple Choice" style={styles.navigation} />
    <Text category='h1'>MultipleChoice</Text>
  </Layout>
);

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center'
  },
});