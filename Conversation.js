import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from expo/vector-icons

const Conversation = ({ navigation, route }) => {
  const { participant } = route.params; // Get the participant's name from route params
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isSent, setIsSent] = useState(true); // Flag to determine if a message is sent or received

  // Sample data for the other person's profile picture
  const otherPersonProfilePicture = require("./assets/pp.png");

  const handleSend = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, isSent }]);
      setMessage("");
      setIsSent(!isSent); // Toggle the flag for the next message
    }
  };

  return (
    <View style={styles.container}>
      {/* Top bar with profile container and back button */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.profileContainer}>
          <Text style={styles.profileName}>{participant}</Text>
          <Image
            source={otherPersonProfilePicture}
            style={styles.profilePicture}
          />
        </View>
      </View>
      {/* Chat container */}
      <View style={styles.chatContainer}>
        <FlatList
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                styles.messageContainer,
                item.isSent ? styles.sentMessage : styles.receivedMessage,
              ]}
            >
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
          inverted // Display messages from bottom to top
        />
      </View>
      {/* Input container */}
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="اكتب رسالتك"
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <Button
          title="إرسال"
          onPress={handleSend}
          color="#007BFF"
          style={styles.sendButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    color: "#4B5867",
  },
  chatContainer: {
    flex: 1,
    paddingTop: 10,
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#fff",
  },
  textInput: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    marginLeft: 5,
    textAlign: "right",
  },
  sendButton: {
    backgroundColor: "#ECB7B7",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 5,
  },
  messageContainer: {
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
    maxWidth: "70%",
    alignSelf: "flex-start",
  },
  sentMessage: {
    backgroundColor: "#ECB7B7",
    alignSelf: "flex-end",
  },
  receivedMessage: {
    backgroundColor: "#E5E5E5",
    alignSelf: "flex-start",
  },
  messageText: {
    textAlign: "right",
  },
});

export default Conversation;
