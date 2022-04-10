import { Layout, Text } from '@ui-kitten/components';
import { HeaderNavigation } from '../../components/HeaderNavigation'
import { StyleSheet } from 'react-native';

export const FlashCard = ({navigation}) => (
  <Layout style={styles.container}>
    <HeaderNavigation navigation={navigation} title="Flash Card" style={styles.navigation} />
    <Text category='h1'>FlashCard</Text>
  </Layout>
);

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center' 
  },
});