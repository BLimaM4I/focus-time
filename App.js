import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Focus } from "./src/features/Focus";
import { colors } from "./src/utils/colors";
import { useState } from "react";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <View>
          <Text style={{ color: colors.white }}>
            I'm going to render the timer for {currentSubject}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});
