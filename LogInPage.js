import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
//import { validatePassword } from "./utils"; // Assuming you have a utility function for password validation

const LogInPage = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    // Request media library permissions on component mount
    // (Ensure ExpoImagePicker is available in your project)
    (async () => {
      const { status } =
        await ExpoImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        console.log("تم رفض الإذن!");
      }
    })();
  }, []);

  const handleDownloadImage = () => {
    setShowOptions(true);
  };

  const handleContinue = () => {
    //  const isValid = validatePassword(password);
    if (!isValid) {
      setPasswordError("Password must meet all requirements.");
      return;
    }
    setPasswordError("");
    navigation.navigate("", { imageUri: null }); // Replace with your navigation logic
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword"); // Navigate to the Forgot Password screen
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.welcomeText}>مرحبًا بك مجددًا</Text>

      {/* Top-left arrow icon */}
      <TouchableOpacity
        style={[styles.iconButton, styles.topLeft]}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={24} color="#9B9B9B" />
      </TouchableOpacity>

      {/* Top-right arrow icon */}
      <TouchableOpacity
        style={[styles.iconButton, styles.topRight]}
        onPress={handleContinue}
      >
        <AntDesign name="arrowright" size={24} color="#ECB7B7" />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleDownloadImage}>
        <View style={styles.imageContainer}>
          {/* Profile picture content removed */}
        </View>
      </TouchableOpacity>

      {/* White Box Container */}
      <View style={styles.whiteBox}>
        <Text style={styles.title}> تسجيل دخول</Text>
        <TextInput
          style={styles.input}
          placeholder="اسم المستخدم"
          value={username}
          onChangeText={setUsername}
        />

        {/* Password Input */}
        <TextInput
          style={[styles.input, styles.passwordInput]}
          placeholder="كلمة المرور"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setPasswordError("");
          }}
        />
        {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
        {passwordError && (
          <Text style={styles.passwordRequirement}>
            Password must:
            {"\n"}- Be at least 8 characters long
            {"\n"}- Contain at least one uppercase letter
            {"\n"}- Contain at least one lowercase letter
            {"\n"}- Contain at least one number
            {"\n"}- Contain at least one symbol
          </Text>
        )}

        {/* Forgot Password Link */}
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>نسيت كلمة المرور؟</Text>
        </TouchableOpacity>
      </View>

      {/* Image Picker Modal */}
      <Modal
        visible={showOptions}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowOptions(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.optionContainer}>
            {/* Options for selecting image */}
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => setShowOptions(false)}
            >
              <Text style={styles.optionText}>إلغاء</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white", // Background color for better visualization
  },
  welcomeText: {
    fontSize: 30,
    marginBottom: -70,
    color: "black",
    textAlign: "right",
    width: "100%",
  },
  whiteBox: {
    width: "90%",
    backgroundColor: "#9fadbd",
    borderRadius: 25,
    padding: 20,
    position: "absolute",
    top: 340,
    marginBottom: "500%",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 55,
    borderWidth: 1,
    borderColor: "#b2b8bf",
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#b2b8bf",
    alignSelf: "center",
  },
  imageContainer: {
    position: "relative",
    width: 150,
    height: 150,
    marginBottom: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  optionContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  optionButton: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    marginVertical: 5,
  },
  optionText: {
    fontSize: 16,
    textAlign: "center",
  },
  passwordInput: {
    textAlign: "right",
  },
  passwordRequirement: {
    marginTop: 10,
    marginBottom: 20,
    textAlign: "right",
    fontSize: 14,
    color: "#777",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  iconButton: {
    position: "absolute",
    padding: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 30,
    marginBottom: 40,
    color: "black",
    textAlign: "right",
    width: "100%",
  },
  topLeft: {
    top: 40,
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    borderWidth: 2,
    borderColor: "#F2F2F2",
  },
  topRight: {
    top: 40,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    borderWidth: 2,
    borderColor: "#F2F2F2",
  },
  // New style for the "Forgot Password" link
  forgotPassword: {
    color: "#56a5ec",
    textAlign: "center",
    marginTop: 10,
  },
});

export default LogInPage;
