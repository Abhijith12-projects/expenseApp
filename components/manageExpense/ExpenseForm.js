import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import { useState } from "react";

import Button from "../UI/Button";
import { dateFormatter } from "../../util/date";
import { Alert } from "react-native";

const ExpenseForm = ({
  onCancel,
  onSubmit,
  subumitButtonLabel,
  defaultValues,
}) => {
  const [input, setInput] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? dateFormatter(defaultValues.date) : "",
    description: defaultValues ? defaultValues.description.toString() : "",
  });

  function inputChangedHandler(inputId, enteredValue) {
    setInput((curValues) => {
      return {
        ...curValues,
        [inputId]: enteredValue,
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +input.amount,
      date: new Date(input.date),
      description: input.description,
    };
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;
    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert("Invalid input", "Please check your input values");
      return;
    }
    onSubmit(expenseData);
  }

  return (
    <View style={styles.formStyle}>
      <Text style={styles.title}>Your Expenses</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: input.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: input.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: input.description,
        }}
      />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {subumitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  formStyle: {
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
