import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>I am home</ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
