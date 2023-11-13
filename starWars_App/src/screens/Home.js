import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import LogoutButton from "../components/LogoutButton";
import useAuthStore from "../contexts/authStore";

const HomeScreen = () => {
  const clearUser = useAuthStore((state) => state.clearUser);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/estrelado.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        <LogoutButton onPress={clearUser}/>
        <Text style={styles.title}>Bem-vindo ao Universo de Star Wars!</Text>
        <Text style={styles.description}>
          Explore informações sobre planetas, espécies e veículos.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white"
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "white"
  },
});

export default HomeScreen;
