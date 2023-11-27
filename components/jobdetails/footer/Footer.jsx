import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          style={styles.likeBtnImage}
          resizeMode="contain"
          source={icons.heartOutline}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.applyBtn}>
        <Text style={styles.applyBtnText} onPress={() => Linking.openURL(url)}>
          Apply for job
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
