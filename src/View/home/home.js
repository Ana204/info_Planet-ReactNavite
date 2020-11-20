import React from 'react';
import { Video } from 'expo-av';
import {Text, View,StyleSheet, Image, StatusBar, SafeAreaView, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Home({ navigation }) {
    return (
      <SafeAreaView style = {styles.area}> 
         <StatusBar barStyle = "light-content" />

      <View style = {styles.InfoVideo}>
        <Video style={styles.video} 
        source ={{
          uri: 'https://denison3965.github.io/Img-planet/Mercury%20Planet%20-%2030300.mp4'
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        />
      </View>
      
      <View style = {styles.informationArea}>
      <View style = {styles.elipse}></View>

      <View style= {styles.arrow}> 
      <TouchableOpacity>
          <Ionicons name = "ios-contacts" size = {50} color = "#fe9a2e"/>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate('Desenvolvedores')}
        > 
          <Ionicons name = "ios-arrow-forward" size = {50} color = "#fe9a2e"/>
        </TouchableOpacity>
      </View>

      <View style = {styles.coment}>
        <View style = {styles.IntInfo} >
          <Text style = {styles.description}>
            Seja bem vindo(a). Esse app é uma biblioteca de informações sobre diversos
            planetas da nossa galáxia. Venha se divertir e obter conhecimento nesse incrível
            universo!
          </Text>
        </View>
      </View>
    
      </View>
      </SafeAreaView>

    );
  }
 

  const styles = StyleSheet.create({
    area:{
      backgroundColor: '#1c1c1c',
      flex: 1,
    },
    InfoVideo:{
      flex: 0.6
    },
    video:{
      width: '100%',
      height: '100%',
    },
    elipse:{
      flexDirection: "row",
      backgroundColor: '#1c1c1c',
      marginTop: -40,
      borderTopRightRadius: 70,
      borderTopLeftRadius: 70,
      height: 40,
    },
    informationArea:{
      flex: 0.4
    },
    arrow:{
      fontSize: 50,
      color: '#000',
      alignItems: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 10,
      marginRight: 15,
    },
    coment:{
      height: '80%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    IntInfo:{
      marginLeft: 10,
      marginRight: 10,
    },
    description:{
      color: '#F2F2F2',
      fontSize: 18,
      textAlign: 'center'
    }
  });