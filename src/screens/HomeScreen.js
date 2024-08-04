import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const imgLogo = require("../../assets/LosAnge_2.png");
const promoteImage = require("../../assets/Promote.jpg");
const protectImage = require("../../assets/Protect.jpg");
const preserveImage = require("../../assets/Preserve.jpg");
const practiceImage = require("../../assets/Practice.jpg");

const shirt1Image = require("../../assets/Buddhi.webp");
const shirt2Image = require("../../assets/Shakti.webp");
const shirt3Image = require("../../assets/Satya.webp");
const shirt4Image = require("../../assets/Veer.webp");

const resource1Image = require("../../assets/TatvaLogo.png");
const resource2Image = require("../../assets/GTEvent.png");
const resource3Image = require("../../assets/campusholi.jpg");

const { width, height } = Dimensions.get("window");

const Card = ({ title, imageSource, isFullWidth, externalLink }) => {
  const handlePress = async () => {
    if (externalLink) {
      const supported = await Linking.canOpenURL(externalLink);
      if (supported) {
        await Linking.openURL(externalLink);
      } else {
        console.log("Don't know how to open this URL: " + externalLink);
      }
    }
  };

  return (
    <TouchableOpacity
      style={[styles.card, isFullWidth && styles.fullWidthCard]}
      onPress={handlePress}
    >
      <View style={styles.cardImageContainer}>
        <Image
          source={imageSource}
          style={[styles.cardImage, isFullWidth && styles.fullWidthCardImage]}
          resizeMode="cover"
        />
      </View>
      <Text
        style={[styles.cardTitle, isFullWidth && styles.fullWidthCardTitle]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation(); // Use this hook to get the navigation object

  const handleLogin = () => {
    navigation.navigate("Sankalp Login"); // Navigate to the Login screen
  };
  const handleLearnMore = () => {
    navigation.navigate("About Us");
  };
  const handleExternalLink = async () => {
    const url = "https://store.hinduyuva.org/"; // Replace with your actual URL
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Don't know how to open this URL: " + url);
    }
  };
  const handleNewExternalLink = async () => {
    const url = "https://hinduyuva.org/news"; // Replace with your actual URL
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Don't know how to open this URL: " + url);
    }
  };
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Implement your subscription logic here
    console.log("Subscribing with email:", email);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imgLogo} style={styles.image} resizeMode="cover" />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Sankalp Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About Us</Text>
        <Text style={styles.aboutText}>
          Hindu YUVA aims to provide a platform to preserve, practice, promote,
          and protect Hindu Dharma by bringing together Hindu youth on college
          campuses across North America. Hindu YUVA creates opportunities for
          college communities (students, staff, and faculty members) to
          understand and practice Hindu Dharma or the Hindu way of life.
        </Text>
      </View>
      <View style={styles.cardsContainer}>
        <Card title="Promote" imageSource={promoteImage} />
        <Card title="Protect" imageSource={protectImage} />
        <Card title="Preserve" imageSource={preserveImage} />
        <Card title="Practice" imageSource={practiceImage} />
      </View>
      <View style={styles.learnMoreContainer}>
        <TouchableOpacity
          style={styles.learnMoreButton}
          onPress={handleLearnMore}
        >
          <Text style={styles.learnMoreButtonText}>More about us</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productsContainer}>
        <Text style={styles.productsTitle}>Shop Hindu YUVA</Text>
        <View style={styles.cardsContainer}>
          <Card
            title="Buddhi"
            imageSource={shirt1Image}
            isFullWidth={true}
            externalLink="https://store.hinduyuva.org/products/ganesha-sweatshirt"
          />
          <Card
            title="Shakti"
            imageSource={shirt2Image}
            isFullWidth={true}
            externalLink="https://store.hinduyuva.org/products/durga-sweatshirt?pr_prod_strat=e5_desc&pr_rec_id=1a1853d1c&pr_rec_pid=7567121219802&pr_ref_pid=7567119515866&pr_seq=uniform"
          />
          <Card
            title="Satya"
            imageSource={shirt3Image}
            isFullWidth={true}
            externalLink="https://store.hinduyuva.org/products/ram-sweatshirt?pr_prod_strat=e5_desc&pr_rec_id=1a1853d1c&pr_rec_pid=7567138816218&pr_ref_pid=7567119515866&pr_seq=uniform"
          />
          <Card
            title="Veer"
            imageSource={shirt4Image}
            isFullWidth={true}
            externalLink="https://store.hinduyuva.org/products/hanuman-sweatshirt?pr_prod_strat=e5_desc&pr_rec_id=ecc631863&pr_rec_pid=7567119515866&pr_ref_pid=7567121219802&pr_seq=uniform"
          />
        </View>
      </View>
      <View style={styles.externalLinkContainer}>
        <TouchableOpacity
          style={styles.externalLinkButton}
          onPress={handleExternalLink}
        >
          <Text style={styles.externalLinkButtonText}>Buy @ HY Store</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.externalLinksContainer}>
        <Text style={styles.sectionTitle}>HY News & Stories</Text>
        <View style={styles.cardsContainer}>
          <Card
            title="TATTVA - MAY 2024"
            imageSource={resource1Image}
            isFullWidth={true}
            externalLink="https://hinduyuva.org/newsdetail/69/tattva-%E2%80%93-may-2024-"
          />
          <Card
            title="Guest Speaker at GT HY"
            imageSource={resource2Image}
            isFullWidth={true}
            externalLink="https://www.linkedin.com/posts/ami-ganatra-910a7b4_talk-at-georgia-tech-on-demystifying-epics-activity-7064961197149761536-Ulkv/"
          />
          <Card
            title="HY Holi on Campus"
            imageSource={resource3Image}
            isFullWidth={true}
            externalLink="https://www.dailytarheel.com/article/2024/04/lifestyle-university-holi-moli-24-unc-chapel-hill"
          />
        </View>
      </View>
      <View style={styles.externalLinkContainer}>
        <TouchableOpacity
          style={styles.externalLinkButton}
          onPress={handleNewExternalLink}
        >
          <Text style={styles.externalLinkButtonText}>Read News & Stories</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.newsletterSection}>
        <Text style={styles.newsletterTitle}>Subscribe for our Newsletter</Text>
        <Text style={styles.newsletterSubtitle}>
          Subscribe for the latest news and updates
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TouchableOpacity
            style={styles.subscribeButton}
            onPress={handleSubscribe}
          >
            <Text style={styles.subscribeButtonText}>Subscribe</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Image
          source={require("../../assets/13.png")}
          style={styles.footerLogo}
        />
        <Text style={styles.copyrightText}>
          © Copyright 2024 All rights reserved
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: 10,
  },
  imageContainer: {
    height: height,
    position: "relative",
  },
  image: {
    width: width,
    height: height,
  },
  buttonContainer: {
    position: "absolute",
    top: height * 0.22, // Adjust this value to position the button vertically
    left: 0,
    right: 0,
    alignItems: "baseline", // Align to the left
    paddingLeft: "40%", // Adjust this value to move the button horizontally
  },
  loginButton: {
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent white
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  loginButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  aboutContainer: {
    padding: 20,
  },
  aboutTitle: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
  aboutText: {
    fontSize: 20,
    lineHeight: 24,
    color: "black",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },
  card: {
    width: width / 2 - 20,
    marginBottom: 5,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
  learnMoreContainer: {
    alignItems: "center",
    marginVertical: 0,
    marginBottom: 10,
  },
  learnMoreButton: {
    backgroundColor: "black", // You can change this color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  learnMoreButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  productsContainer: {
    padding: 20,
    marginBottom: 10,
  },
  productsTitle: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
  fullWidthCard: {
    width: width - 40, // Full width minus padding
    marginBottom: 0,
  },
  fullWidthCardImage: {
    height: 200, // Taller image for full-width cards
  },
  fullWidthCardTitle: {
    fontSize: 24, // Larger font size for full-width (product) card titles
    padding: 15, // Increased padding for better spacing
  },
  externalLinkContainer: {
    alignItems: "center",
    marginTop: -30,
    marginBottom: 10,
  },
  externalLinkButton: {
    backgroundColor: "black", // Different color to distinguish from "More about us"
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  externalLinkButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  externalLinksContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 15,
    color: "black",
  },
  newsletterSection: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    alignItems: "center",
    marginTop: 20,
  },
  newsletterTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  newsletterSubtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  subscribeButton: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: "center",
  },
  subscribeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#f8f8f8",
    padding: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerLogo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  copyrightText: {
    fontSize: 12,
    color: "#666",
  },
});

export default HomeScreen;
