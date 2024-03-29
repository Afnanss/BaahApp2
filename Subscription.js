import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    // You can implement your logic for handling the selected plan here
    console.log("Selected plan:", plan);
  };

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        loop={true}
        autoplay={true}
        autoplayTimeout={3}
      >
        <View style={styles.slide}>
          <TouchableOpacity
            style={[
              styles.planButton,
              selectedPlan === "gold" && styles.selectedPlan,
            ]}
            onPress={() => handleSelectPlan("gold")}
          >
            <Text style={styles.planText}>الأشتراك الذهبي</Text>
            <Text style={styles.planDetails}>$19.99/month</Text>
            <View style={styles.featureItem2}>
              <Text style={styles.planFeatures}>- فلاتر متنوعة.</Text>
            </View>
            <View style={styles.featureItem3}>
              <Text style={styles.planFeatures}>- اتصالات مخفيه.</Text>
            </View>
            <View style={styles.featureItem3}>
              <Text style={styles.planFeatures}>
                - انظر لتقييمات من تهتم به.
              </Text>
            </View>
            <View style={styles.featureItem3}>
              <Text style={styles.planFeatures}>- تحقق من موقع مشتركينك.</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.slide}>
          <TouchableOpacity
            style={[
              styles.planButton,
              selectedPlan === "silver" && styles.selectedPlan,
            ]}
            onPress={() => handleSelectPlan("silver")}
          >
            <Text style={styles.planText}>الأشتراك الفضي</Text>
            <Text style={styles.planDetails}>$9.99/month</Text>
            <View style={styles.featureItem2}>
              <Text style={styles.planFeatures}>- فلاتر متنوعة.</Text>
            </View>
            <View style={styles.featureItem3}>
              <Text style={styles.planFeatures}>- اتصالات مخفيه.</Text>
            </View>
            <View style={styles.featureItem3}>
              <Text style={styles.planFeatures}>
                - انظر لتقييمات من تهتم به.
              </Text>
            </View>
            <View style={styles.featureItem3}>
              <Text style={styles.planFeatures}>- تحقق من موقع مشتركينك.</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.slide}>
          <TouchableOpacity
            style={[
              styles.planButton,
              selectedPlan === "platinum" && styles.selectedPlan,
            ]}
            onPress={() => handleSelectPlan("platinum")}
          >
            <Text style={styles.planText}>الأشتراك الرمادي</Text>
            <Text style={styles.planDetails}>$29.99/month</Text>
            <View style={styles.featureItem2}>
              <Text style={styles.planFeatures}>- فلاتر متنوعة.</Text>
            </View>
            <View style={styles.featureItem3}>
              <Text style={styles.planFeatures}>- اتصالات مخفيه.</Text>
            </View>
            <View style={styles.featureItem3}>
              <Text style={styles.planFeatures}>
                - انظر لتقييمات من تهتم به.
              </Text>
            </View>
            <View style={styles.featureItem3}>
              <Text style={styles.planFeatures}>- تحقق من موقع مشتركينك.</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Swiper>
      <View style={styles.featureItem}>
        <Text style={styles.planFeatures2}>
          اشتراكك مرتبط بحسابك على باءة ولا يمكن تحويله إلى حساب آخر. أذا كنت
          لاتمتلك أي عضوية فلك فقط مكالمتين مجانية.
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
    padding: 20,
  },
  planFeaturesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
    marginTop: 30,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  featureItem: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 10,
    marginBottom: 10,
  },
  planFeatures: {
    fontSize: 16,
    color: "black",
    fontFamily: "Cairo",
  },
  planFeatures2: {
    fontSize: 16,
    marginTop: 10,
    color: "#666",
    fontFamily: "Cairo",
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  planButton: {
    width: "80%",
    height: 400, // Adjust the height as needed
    backgroundColor: "#ECB7B7",
    padding: 20,
    borderRadius: 10, // Rounded corners for rectangular boxes
    alignItems: "center",
    marginBottom: 30, // Spacing between boxes
  },
  planText: {
    fontSize: 30,
    marginTop: 10,
    fontWeight: "bold",
    fontFamily: "Cairo",
  },
  planDetails: {
    fontSize: 16,
    marginTop: 5,
    color: "#666",
    fontFamily: "Cairo",
  },
  selectedPlan: {
    backgroundColor: "#eeeeee",
  },
  featureItem2: {
    flexDirection: "row-reverse", // Changed to 'row-reverse' to position image to the left
    alignItems: "center",
    marginBottom: 10,
    marginTop: 70,
  },
  featureItem3: {
    flexDirection: "row-reverse", // Changed to 'row-reverse' to position image to the left
    alignItems: "center",
    marginBottom: 10,
    marginTop: -2,
  },
});

export default Subscription;
