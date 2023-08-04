import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../config";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [showLoginInput, setShowLoginInput] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  const handleLogin = async () => {
    console.log(JSON.stringify({ username }));
    try {
      const { data } = await api.post("authenticate", { username });
      console.log(data)
      if (data.valid) {
        navigation.navigate("Main", { username }); // Navigate to MainScreen with the username
      } else {
        alert("Invalid Username. Try again.");
      }
    } catch (error) {
      console.error("Error authenticating user:", error);
      alert("An error occurred during login. Please try again later.");
    }
  };

  const handleRegainAccess = () => {
    setShowWhatsAppModal(true);
  };

  const openWhatsApp = () => {
    const whatsappURL = "https://api.whatsapp.com/send?phone=5588993730036";
    Linking.openURL(whatsappURL);
    setShowWhatsAppModal(false);
  };

  return (
    <>
      <ImageBackground
        source={require("../../../assets/background.png")}
        style={styles.container}
      >
        <Image
          source={require("../../../assets/iron.png")}
          style={styles.logo}
        ></Image>
        {/* Login button */}
        {!showLoginInput && (
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => setShowLoginInput(true)}
          >
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
        )}

        {/* Login input */}
        {showLoginInput && (
          <View style={styles.loginInputContainer}>
            <TextInput
              placeholder="Nome de usuário"
              placeholderTextColor="white"
              onChangeText={(text) => setUsername(text)}
              value={username}
              style={styles.loginInput}
              returnKeyType="done"
              onSubmitEditing={handleLogin}
            />
            <TouchableOpacity onPress={handleRegainAccess}>
              <Text style={styles.regainAccessText}>Recuperar o acesso</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* WhatsApp Modal */}
        <Modal
          visible={showWhatsAppModal}
          transparent={true}
          animationType="fade"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Deseja entrar em contato pelo WhatsApp?
              </Text>
              <View style={styles.buttonContent}>
                <TouchableOpacity
                  style={styles.whatsappButton}
                  onPress={openWhatsApp}
                >
                  <Text style={styles.whatsappButtonText}>Abrir WhatsApp</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setShowWhatsAppModal(false)}
                >
                  <Text style={styles.closeButtonText}>Fechar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "50%",
  },
  logo: {
    width: 800,
    height: 400,
    resizeMode: "contain",
    paddingBottom: "20%",
  },
  loginButton: {
    position: "relative",
    backgroundColor: "transparent",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "white",
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
  },
  loginInputContainer: {
    color: "white",
    marginTop: 20,
    alignItems: "center",
  },
  loginInput: {
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 60,
    paddingHorizontal: 30,
    paddingVertical: 20,
    width: 250,
    textAlign: "left",
  },

  regainAccessText: {
    color: "white",
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 50,
    paddingLeft: "20%",
    paddingRight: "20%",
  },

  buttonContent: {
    flexDirection: "row-reverse",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    padding: "5%",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  whatsappButton: {
    backgroundColor: "#25D366",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    marginLeft: "5%",
  },
  whatsappButtonText: {
    color: "white",
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: "#DDDDDD",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  closeButtonText: {
    fontSize: 16,
  },
});

export default LoginScreen;
