import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { Alert, FlatList, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "./theme";
import Card from "./components/card";

const CARD_DATA = [
  {
    id: "1",
    image: "https://framerusercontent.com/images/yXX0TY9g4YOMQbj1DfyNlb7ZN4.png",
    title: "Career Week",
    date: "November 8th - 14th, 2024",
    description: "Join us for a week exploring careers!",
    link: "https://ghw.mlh.io/events/career-week",
  },
  {
    id: "2",
    image: "https://framerusercontent.com/images/YNNvzMFaLN09A8IJDMzuoWDI.png",
    title: "Data Week",
    date: "December 6th - 12th, 2024",
    description: "Join us for a week of all things Data!",
    link: "https://ghw.mlh.io/events/data",
  },
  {
    id: "3",
    image: "https://framerusercontent.com/images/YjFuGJ9wP4XjRePzFSjoLhAuC8I.png",
    title: "Beginner Week",
    date: "January 2025",
    description: "Join us for a week of beginner-friendly content to kick off 2025!",
    link: "https://ghw.mlh.io/events/beginners-week",
  },
];

export default function App() {
  const handleSignup = () => {
    //Alert.alert("Sign up to GHW", "You are signed up!");
    Alert.alert("Register for GHW", "Are you interested in participating in MLH GHW?", [
      {
        text: "No",
        style: "destructive",
        onPress: () => console.log("Not signed up :("),
      },
      {
        text: "Yes",
        style: "default",
        onPress: () => Linking.openURL("https://events.mlh.io/events/11595"),
      },
    ]);
  };

  const renderItem = ({ item }: { item: (typeof CARD_DATA)[0] }) => (
    <View style={styles.cardContainer}>
      <Card
        image={item.image}
        title={item.title}
        date={item.date}
        description={item.description}
        link={item.link}
      />
    </View>
  );
  return (
    <View>
    <FlatList
      ListHeaderComponent={
        <View style={styles.container}>
          <Image
            style={styles.headerImage}
            source={"https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.png"}
            transition={1000}
            contentFit="contain"
          />
          <Text style={styles.headLineText}>Global Hack Week</Text>
          <Text style={styles.bodyText}>
            Each month we host a Global Hack Week where you can learn new skills, build your
            portfolio, attend fun sessions and connect with other hackers in the MLH community.
          </Text>
          <Text style={styles.bodyText}>
            It&apos;s free and easy to get started! Sign up now and get ready to hack!
          </Text>
          <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      }
      data={CARD_DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      contentContainerStyle={styles.scrollContainer}
    />
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  container: {
    alignItems: "center",
    backgroundColor: theme.colors.white,
    flex: 1,
    justifyContent: "center",
  },
  headerImage: {
    height: 300,
    width: 300,
  },
  headLineText: {
    ...theme.textVariants.headLine,
  },
  bodyText: {
    ...theme.textVariants.bodyText,
    width: "80%",
    marginVertical: 10,
    textAlign: "center",
  },
  scrollContainer: {
    paddingVertical: 20,
  },
  separator: {
    height: 16,
  },
  signupButton: {
    backgroundColor: theme.colors.primaryButton,
    borderRadius: 8,
    color: theme.colors.white,
    padding: 16,
  },
  signupButtonText: {
    ...theme.textVariants.buttonTextDark,
  },
});
