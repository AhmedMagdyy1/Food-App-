import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text } from "react-native";
import yelp from "../api/yelp";

export default function ResultsShowScreen({ route }) {
  const [result, setResult] = useState(null);
  // for get data from resultList => FlatList
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <Text style={styles.titleStyle}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 300,
    height: 200,
    marginTop: 30,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
