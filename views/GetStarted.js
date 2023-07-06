import { StyleSheet, Text, View, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton.js";
import GetStartedImg from "../assets/images/getStarted.png";

export default function GetStarted() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <View style={styles.circleContainer}>

    </View>
      <Image source={GetStartedImg} />
      <Text style={styles.title}>Get things done with ToDo</Text>
      <Text style={styles.text}>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing. Maxime,
          tempore! Animi nemo aut atque,
           deleniti nihil dolorem repellendus.
      </Text>
      <CustomButton onPress={() => navigation.navigate("SignUp")} title="Get Started" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: '100%',
    paddingTop: 80
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: '#000',
    marginTop: 40,
  },
  text: {
    maxWidth: 250,
    width: '100%',
    textAlign: 'center',
    lineHeight: 22,
    fontSize: 14,
    marginTop: 18,
    marginBottom: 60,
  },
});
