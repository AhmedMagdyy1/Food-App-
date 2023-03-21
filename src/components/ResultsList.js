import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ResultsDetail from "./ResultsDetial";
import { useNavigation } from "@react-navigation/native";

function ResultsList({ title, results }) {
  const navigation = useNavigation();
  if (!results.length) {
    return null;
  }

  return (
    <>
      <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                // the second paramter in navigate uses as params = optional object
                onPress={() => navigation.navigate("Result", { id: item.id })}
              >
                <ResultsDetail result={item} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 15,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsList;
