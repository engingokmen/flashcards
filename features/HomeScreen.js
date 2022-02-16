import { Layout, StyleService, useStyleSheet } from "@ui-kitten/components";
import { TabView } from "../components";

export const HomeScreen = () => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Layout style={styles.layout}>
      <TabView />
    </Layout>
  );
};

const themedStyles = StyleService.create({
  layout: { height: "100%" },
});
