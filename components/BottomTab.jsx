import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';

const IconHome = (props) => (
  <Icon {...props} name='home'/>
);

const IconCreateSet = (props) => (
  <Icon {...props} name='plus-circle'/>
);

const IconAllCards = (props) => (
  <Icon {...props} name='layers'/>
);

export const BottomTabBar = (props) => {
  const {navigation, state} = props
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab icon={IconHome}/>
      <BottomNavigationTab icon={IconCreateSet}/>
      <BottomNavigationTab icon={IconAllCards}/>
    </BottomNavigation>
  );
}