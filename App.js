import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { HomeScreen } from "./features";
import { SafeAreaView } from "react-native";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { default as theme } from "./theme.json";

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </ApplicationProvider>
  </>
);
