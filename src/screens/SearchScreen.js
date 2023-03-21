import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Animated } from "react-native";
import ResultsList from "../components/ResultsList";
import useResults from "../hooks/useResults";
import SearchBar from "./../components/SearchBar";

export default function SearchScreen() {
  const [term, setTerm] = useState("");
  const [results, errorMessage, searchApi] = useResults();

  const filterPriceResult = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        //   for when the user hit enter in search the data get from api
        onTermSubmit={() => searchApi(term)}
      />
      <View style={styles.container}>
        {/* {errorMessage ? <Text>{errorMessage}</Text> : null} */}
        <ScrollView>
          <ResultsList
            results={filterPriceResult("$")}
            title="Cost Effective"
          />
          <ResultsList results={filterPriceResult("$$")} title="Bit Pricier" />
          <ResultsList results={filterPriceResult("$$$")} title="Big Spender" />
        </ScrollView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    flex: 1,
  },
});
