import { CurrentRenderContext } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
// Import components and functions for database operations

const MainScreen = ({ route }) => {
  const { username } = route.params;
  const [firstName, setFirstName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [mostWellRatedRecipe, setMostWellRatedRecipe] = useState(null);

  useEffect(() => {
    const nameArray = username.split(" ");
    setFirstName(nameArray[0]);
  }, [username]);

  const handleSearch = () => {};

  const handleRandomizeRecipe = () => {};

  const handleAddRecipe = () => {};

  const handleGoToRecipe = (recipeId) => {};

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.salutation}>Olá, {username}!</Text>
      <Text style={styles.subtitle}>
        O que você está afim de cozinhar hoje?
      </Text>
      </View>

      <View style={styles.containerSearch}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar receitas"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.randomizeButton}
          onPress={handleRandomizeRecipe}
        >
          <Text style={styles.buttonText}>Aleatorizar receita</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={handleAddRecipe}>
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 50,
  },

  salutation: {
    textAlign: "left",
    marginTop: 32,
    color: "#000000",
    fontSize: 32,
  },

  subtitle: {
    textAlign: "left",
    fontSize: 16,
    
  },

  containerSearch: {

    display: 'flex',
    alignItems: "center",

  },


  searchInput: {
    marginTop: 16,
    width: 292,
    height: 48,
    display: "flex",
    alignItems: 'center',
    textAlign: "center",
    justifyContent:'center',
    borderWidth: 1,
    borderRadius: 5

  },

  buttonContainer: {
    display: 'flex',
    flexDirection:'row',
    justifyContent:'center',
    marginTop: 16
  },

  addButton: {
    width: 69,
    height:46,
    paddingVertical:8,
    marginLeft: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    fontSize: 20,
  },

  buttonText: {
    width: 207,
    height: 46,
    fontSize: 16,
    paddingVertical:10,
    alignItems:'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
  },
});

export default MainScreen;
