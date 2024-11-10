import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "./theme";

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

  return (
    <View style={styles.container}>
      <Image
        style={styles.headerImage}
        source={"https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.png"}
        transition={1000}
        contentFit="contain"
      />
      <Text style={styles.headLineText}>Global Hack Week</Text>
      <Text style={styles.bodyText}>
        Each month we host a Global Hack Week where you can learn new skills, build your portfolio,
        attend fun sessions and connect with other hackers in the MLH community.
      </Text>
      <Text style={styles.bodyText}>
        It&apos;s free and easy to get started! Sign up now and get ready to hack!
      </Text>
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
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
