// Inbox.js
import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const Inbox = ({ navigation }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "محمد سعيد",
      content: "ممكن نتعرف؟",
    },
    {
      id: 2,
      sender: "ياسر علي",
      content: "مرحبًا، ما هي خططك لعطلة نهاية الأسبوع؟",
    },
    {
      id: 3,
      sender: "سليمان صالح",
      content: "كيف حالك",
    },
    {
      id: 4,
      sender: "حمد عيسى",
      content: "هل ترغبين في الانضمام إلى العشاء الليلة؟",
    },
  ]);

  // Function to navigate to message details
  const handleMessagePress = (message) => {
    navigation.navigate("Conversation", { participant: message.sender });
  };

  // Render each message item
  const renderMessageItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleMessagePress(item)}
      style={styles.messageItem}
    >
      <View style={styles.messageContent}>
        <Text style={styles.sender}>{item.sender}</Text>
        <Text style={styles.content}>{item.content}</Text>
      </View>
      <Image source={require("./assets/pp.png")} style={styles.profileImage} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages.slice().reverse()} // Reverse the order of messages
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMessageItem}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flatListContent: {
    paddingTop: 10, // Add padding to avoid the first message being cut off
  },
  messageItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginLeft: 10, // Adjusted to display on the right side
  },
  messageContent: {
    flex: 1,
    marginLeft: 10,
  },
  sender: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4B5867", // Changed color
    textAlign: "right", // Align text to right
  },
  content: {
    fontSize: 14,
    color: "#333",
    textAlign: "right", // Align text to right
    marginTop: 5,
  },
});

export default Inbox;
