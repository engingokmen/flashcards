import React from 'react';
import { Icon, Layout, MenuItem, OverflowMenu, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back'/>
);


export const HeaderNavigation = ({navigation, title}) => {

  const renderBackAction = () => (
    <TopNavigationAction onPress={() => navigation.goBack()} icon={BackIcon}/>
  );

  return (
    <Layout style={styles.container} level='1'>
      <TopNavigation
        alignment='center'
        title={title}
        accessoryLeft={renderBackAction}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
    width: '100%'
  },
});