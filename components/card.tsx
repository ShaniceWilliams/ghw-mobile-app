import React from "react";
import { Image } from "expo-image";
import { Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../theme";

type CardProps = {
  image: string;
  title: string;
  date: string;
  description: string;
  link: string;
};

const Card: React.FC<CardProps> = ({ image, title, date, description, link }) => {
  const handlePress = () => {
    Linking.openURL(link);
  };
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={styles.textDate}>{date}</Text>
      <Text style={styles.textDecription}>{description}</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.textLink}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: "flex-start",
    backgroundColor: theme.colors.lightGrey,
    borderRadius: 8,
    padding: 16,
    width: 300,
  },
  image: {
    width: 50,
    height: 50,
  },
  textTitle: {
    color: theme.colors.black,
    fontSize: 24,
    fontWeight: "bold" as "bold",
    marginBottom: 4,
  },
  textDate: {
    color: theme.colors.red,
    fontSize: 18,
    fontWeight: "semibold" as "semibold",
    marginBottom: 4,
  },
  textDecription: {
    color: theme.colors.black,
    fontSize: 12,
    marginBottom: 4,
  },
  textLink: {
    color: theme.colors.red,
    fontSize: 16,
    fontWeight: "bold" as "bold",
  },
});
