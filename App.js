import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ManageExpense from "./screens/ManageExpense";
import RecentExpense from "./screens/RecentExpense";
import AllExpenses from "./screens/AllExpenses";
import { Colors } from "./constants/styles";
import IconButton from "./components/UI/IconButton";
import ExpensesContextProvider from "./store/expenses-context";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpensesOverView() {
  return (
    <BottomTab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: Colors.colors.primary500 },
        tabBarActiveTintColor: Colors.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            name="add"
            size={30}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManegeExpense");
            }}
          />
        ),
      })}
    >
      <BottomTab.Screen
        name="Recent Expenses"
        component={RecentExpense}
        options={{
          title: "Recent Expense",
          tabBarLabel: "Recents",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.colors.primary500 },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverView}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManegeExpense"
              component={ManageExpense}
              options={{
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
