import React from 'react';
import {Text, View,StyleSheet, Image, StatusBar, SafeAreaView, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Home({ navigation }) {
    return (
      <SafeAreaView> 
         <StatusBar barStyle = "light-content" />
        <View>
        <Image style={styles.img} 
        source ={{
          uri: 'https://image.freepik.com/fotos-gratis/uma-bela-galaxia-colorida-no-escuro-espaco-estrelado_181624-11597.jpg'
        }}
        />
      </View>
      
      <View style = {styles.elipse}> 
      </View>

        
      <View style= {styles.arrow}> 
      <TouchableOpacity>
          <Ionicons name = "ios-contacts" size = {50} color = "#000"/>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate('Desenvolvedores')}
        > 
          <Ionicons name = "ios-arrow-forward" size = {50} color = "#000"/>
        </TouchableOpacity>
      </View>

      <View style = {styles.info}>
        <Text>
          ALGUMA COISA ESCRITA AQUI 
        </Text>
      </View>
    
      </SafeAreaView>

    );
  }
 

  const styles = StyleSheet.create({
    img:{
      width: 450,
      height: 450,
    },
    elipse:{
      flexDirection: "row",
      backgroundColor: '#FFF',
      marginTop: -40,
      borderTopRightRadius: 70,
      borderTopLeftRadius: 70,
      height: 40,
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
    info:{
      
    }
  });