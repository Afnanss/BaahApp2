import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProfileContainer = () => {
  // Mock profile data
  const profile = {
    name: "محمد غالي",
    profileImage: require("./assets/pp.png"),
  };

  return (
    <View style={styles.profileContainer}>
      {/* Profile Text */}
      <View style={styles.profileTextContainer}>
        <Text style={styles.welcomeText}>مرحبًا</Text>
        <Text style={styles.nameText}>{profile.name}</Text>
      </View>

      {/* Profile Image */}
      <Image source={profile.profileImage} style={styles.profileImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CED0CE",
    paddingHorizontal: 20,
  },
  profileTextContainer: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: "#333",
  },
  nameText: {
    fontSize: 18,
    color: "#333",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
});

export default ProfileContainer;
