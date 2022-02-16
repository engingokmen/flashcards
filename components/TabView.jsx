import { useState } from "react";

import {
  Icon,
  Layout,
  StyleService,
  Tab,
  TabView as TabViewKitten,
  Text,
  useStyleSheet,
} from "@ui-kitten/components";

export const TabView = () => {
  const styles = useStyleSheet(themedStyles);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <TabViewKitten
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <Tab
        title="QUIZ"
        icon={<Icon name="book-open-outline" style={styles.icon} />}
      >
        <Layout style={styles.tabContainer}>
          <Text category="h5">QUIZ</Text>
        </Layout>
      </Tab>
      <Tab
        title="FLASHCARDS"
        icon={<Icon name="flash-outline" style={styles.icon} />}
      >
        <Layout style={styles.tabContainer}>
          <Text category="h5">FLASHCARDS</Text>
        </Layout>
      </Tab>
      <Tab
        title="SETTINGS"
        icon={<Icon name="settings-outline" style={styles.icon} />}
      >
        <Layout style={styles.tabContainer}>
          <Text category="h5">SETTINGS</Text>
        </Layout>
      </Tab>
    </TabViewKitten>
  );
};

const themedStyles = StyleService.create({
  tabContainer: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  hint: {
    color: "text-hint-color",
  },
  icon: {
    height: 34,
    width: 44,
  },
});
