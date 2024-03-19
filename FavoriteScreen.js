import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useFavorites } from "./FavoritesContext";
import { profileData } from "./HomeScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const { width } = Dimensions.get("window");

const FavoriteScreen = () => {
  const { favorites, toggleFavorite } = useFavorites();

  const favoriteProfiles = profileData.filter((profile) =>
    favorites.includes(profile.id)
  );

  const renderProfile = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.profileContainer}>
        <View style={styles.profileDetails}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.detailContainer}>
            <EvilIcons name="location" size={20} style={styles.icon} />
            <Text style={styles.detailText}>{item.location}</Text>
          </View>
          <View style={styles.detailContainer}>
            <EvilIcons name="clock" size={20} style={styles.icon} />
            <Text style={styles.detailText}>{item.lastSeen}</Text>
          </View>
        </View>
        <Image
          source={item.image}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.description}>
        ابحث عن رجل صادق ويخاف الله، يحب الوناسة والعمل ومتفهم ومرح ويكون مسؤول
        عن نفسه للزواج.
      </Text>
      <View style={styles.actionContainer}>
        <TouchableOpacity
          onPress={() => {
            /* handle message action */
          }}
        >
          <FontAwesome name="envelope-o" size={24} style={styles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
          <FontAwesome name="star-o" size={24} style={styles.actionIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteProfiles}
        renderItem={renderProfile}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center", // Center the cards horizontally
  },
  card: {
    width: width * 0.85, // Make the card smaller
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginVertical: 10,
    padding: 15,
    alignItems: "center", // Center elements inside the card
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%", // Ensure the profile container takes the full width of the card
  },
  profileDetails: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 10, // Ensure spacing between image and details
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#FFF",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },
  icon: {
    marginLeft: 5,
  },
  detailText: {
    fontSize: 14,
  },
  description: {
    fontSize: 13,
    fontWeight: "normal",
    textAlign: "right",
    marginTop: 10,
    marginBottom: 10, // Add space above the action icons
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "center", // Center the icons at the bottom of the card
    width: "100%", // Ensure the action container takes the full width of the card
  },
  actionIcon: {
    marginHorizontal: 10, // Space out the icons
  },
});

export default FavoriteScreen;
