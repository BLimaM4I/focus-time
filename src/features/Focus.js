import { StyleSheet, useWindowDimensions, View } from "react-native";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  const height = useWindowDimensions().height * 0.06;
  return (
    <View style={[styles.container, { paddingTop: height }]}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What you like to focus on?"
          onChangeText={setSubject}
        />
        <RoundedButton
          style={styles.button}
          title="+"
          size={50}
          onPress={() => {
            addSubject(subject);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});
