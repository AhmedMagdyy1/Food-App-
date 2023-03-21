import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <>
      <View style={styles.ViewStyle}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search"
          value={term}
          onChangeText={onTermChange}
          onEndEditing={onTermSubmit}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  ViewStyle: {
    marginTop: 10,
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  inputStyle: {
    flex: 1,
    padding: 5,
    marginHorizontal: 2,
    fontSize: 18,
  },
});
