import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry, Layout, StyleService, useStyleSheet } from "@ui-kitten/components";
import { RouterNavigation } from "./navigator";
import { SafeAreaView } from "react-native";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { default as theme } from "./theme.json";

export default () => {
    const styles = useStyleSheet(themedStyles);
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
          <SafeAreaView>
            <Layout style={styles.layout}>
              <RouterNavigation />
            </Layout>
          </SafeAreaView>
        </ApplicationProvider>
      </>
    );
  }
const themedStyles = StyleService.create({
  layout: { height: "100%" },
});

