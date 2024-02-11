import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

const Calulator = ({ route }) => {
  const { currency } = route.params;
  const [amount, setAmount] = useState("");
  const [time, setTime] = useState("");
  const [apy, setApy] = useState("");
  const [compoundInterest, setCompoundInterest] = useState("");
  const [currencyValue, setCurrencyValue] = useState("");
  const [convertAmountResult, setConvertAmountResult] = useState("");

  const obj = [
    { label: "Amount", onchange: setAmount },
    { label: "Time", onchange: setTime },
    { label: "APY(%)", onchange: setApy },
    { label: "Compound Inetrest", onchange: setCompoundInterest },
    { label: "Currency Value", onchange: setCurrencyValue },
    { label: "Convert Amount Result", value: setConvertAmountResult },
  ];

  const calculate = () => {
    const amountValue = parseFloat(amount);
    const timeValue = parseFloat(time);
    const apyValue = parseFloat(apy);
    const compoundInterestValue = parseFloat(compoundInterest);
    const currencyValueValue = parseFloat(currencyValue);
    const convertAmountResultValue = parseFloat(convertAmountResult);
  };
  return (
    <View style={Styles.container}>
      {obj.map((item) => {
        return (
          <View key={item.value} style={Styles.innerContainer}>
            <Text>{item.label}</Text>
            <TextInput label="Name" style={Styles.inputBox} />
          </View>
        );
      })}
      <Text>Result : {currency.price_change_24h}</Text>
    </View>
  );
};

export default Calulator;

const Styles = StyleSheet.create({
  container: {
    // display: "flex",
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  inputBox: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    width: 200,
  },
});
