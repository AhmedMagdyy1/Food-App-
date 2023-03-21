import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ResultsDetail({ result }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  nameStyle: {
    fontWeight: "bold",
  },
  imageStyle: {
    height: 120,
    width: 250,
    borderRadius: 5,
    marginBottom: 5,
  },
});
