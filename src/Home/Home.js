import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((data) => setCurrencyData(data));
  }, []);

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollView}>
        <View>
          {currencyData &&
            currencyData?.map((currency) => {
              return (
                <Pressable
                  key={currency.id}
                  onPress={() =>
                    navigation.navigate("Calculator", { currency })
                  }
                >
                  <View key={currency.id} style={Styles.mainLayout}>
                    <View>
                      <Image
                        source={{ uri: currency.image }}
                        style={{ width: 30, height: 30 }}
                      />
                    </View>
                    <View>
                      <Text>{currency.symbol}</Text>
                      <Text>{currency.current_price}</Text>
                    </View>
                    <View>
                      <Text>{currency.price_change_percentage_24h}</Text>
                    </View>
                  </View>
                </Pressable>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const Styles = StyleSheet.create({
  home_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    scroll: "auto",
  },
  home_header: {
    fontSize: 80,
    fontWeight: "bold",
    width: "80%",
  },
  mainLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
});
