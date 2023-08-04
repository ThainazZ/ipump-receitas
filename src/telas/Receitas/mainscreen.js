import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
// Import components and functions for database operations

const MainScreen = ({ username }) => {
  const [firstName, setFirstName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [mostWellRatedRecipe, setMostWellRatedRecipe] = useState(null);

  useEffect(() => {
    // Extract the user's first name from the username
    const nameArray = username.split(" ");
    setFirstName(nameArray[0]);

    // Fetch the most well-rated recipe and set it to mostWellRatedRecipe state
    // Fetching random recipes will depend on your database structure and implementation.
  }, [username]);

  const handleSearch = () => {
    // Implement the logic to search the database based on the searchQuery
    // Set the search results to a state and display them accordingly
  };

  const handleRandomizeRecipe = () => {
    // Implement the logic to fetch a random recipe from the database
    // and set it to randomRecipe state
  };

  const handleAddRecipe = () => {
    // Implement navigation to the screen where the user can add a new recipe
  };

  const handleGoToRecipe = (recipeId) => {
    // Implement navigation to the recipe page with the selected recipeId
  };

  return (
    <View style={styles.container}>
      {/* Salutation and Subtitle */}
      <Text style={styles.salutation}>Olá, {firstName}!</Text>
      <Text style={styles.subtitle}>O que você está afim de cozinhar hoje?</Text>

      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar receitas"
        placeholderTextColor="gray"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />

      {/* Randomize and Add Recipe Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.randomizeButton} onPress={handleRandomizeRecipe}>
          <Text style={styles.buttonText}>Aleatorizar receita</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={handleAddRecipe}>
          <Text style={styles.buttonText}>Adicionar receita</Text>
        </TouchableOpacity>
      </View>

      {/* Most Well Classified Recipe Container */}
      {/* Display the recipe details in this container */}
    </View>
  );
};

const styles = StyleSheet.create({
  // Styles for the components go here
});

export default MainScreen;
