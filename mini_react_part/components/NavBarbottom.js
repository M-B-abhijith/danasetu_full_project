import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const NavBarbottom = () => {

  const navigation = useNavigation();
  const handlePress = () => {
    // Navigate to the desired screen
    navigation.navigate('ProfileScreen');
  };
  const handlePress1 = () => {
    // Navigate to the desired screen
    navigation.navigate('Serviceorganizerreceiver');
  };


  return (
    <View style={styles.maincontainer}>
      {/* <Text style={{backgroundColor:"green"}}>NavBarbottom</Text> */}

      <View style={styles.navbar}>

        <Pressable onPress={handlePress1}>
          <Image source={require("../assets/homebuttongrey.png")} style={styles.image} />
        </Pressable>
        <Pressable>
          <Image source={require("../assets/sendbuttongrey.png")} style={styles.image} />

        </Pressable>
        <Pressable>
          <Image source={require("../assets/bellbuttongrey.png")} style={styles.image} />

        </Pressable>
        <Pressable onPress={handlePress}>
          <Image source={require("../assets/usericongrey.png")} style={styles.image} />

        </Pressable>
      </View>
    </View>
  )
}

export default NavBarbottom

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: "center",
  },

  navbar: {
    width: "100%",
    height: 74,
    // backgroundColor: "white",
    backgroundColor: "#DDEEEB",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
  },



})