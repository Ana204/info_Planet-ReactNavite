import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function PlanetBox () {
    return (
        <View style={styles.box}>
            <View style={styles.topArea}>
                <View style={styles.planetImage}>
                    <Image 
                    source={{uri : "https://denison3965.github.io/Img-planet/V%C3%AAnus.jpg"}}
                    style={styles.planet}
                    ></Image>
                </View>
                <View style={styles.planetInfo}>

                    <View style={styles.titleArea}>
                        <Text style={styles.title}>
                            Planeta
                        </Text>
                    </View>

                    <View style={styles.infoAboutPlanet}>

                        <View style={styles.itemInfoAboutPlanet}>
                            <Image source={{uri: "https://denison3965.github.io/Img-planet/galaxy.png"}} style={{width: 30, height:30}}></Image>
                            <Text style={styles.textIcons}>Galaxy</Text>
                        </View>

                        <View style={styles.itemInfoAboutPlanet}>
                            <Image source={{uri: "https://denison3965.github.io/Img-planet/hot.png"}} style={{width: 30, height:30}}></Image>
                            <Text style={styles.textIcons}>Galaxy</Text>
                        </View>

                        <View style={styles.itemInfoAboutPlanet}>
                            <Image source={{uri: "https://denison3965.github.io/Img-planet/gravidade.png"}} style={{width: 30, height:30}}></Image>
                            <Text style={styles.textIcons}>Galaxy</Text>
                        </View>

                    </View>
                </View>
            </View>
            <View style={styles.bottomArea}>
                <View style={styles.planetDescription}>
                    <Image source={{uri: "https://denison3965.github.io/Img-planet/info.png"}} style={{width: 27, height:27, marginLeft: 10}}></Image>
                    <Text style={styles.textDescription}>Desecricao  </Text>  
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        height: 300,
        width: '100%',
        marginVertical:30,
        display: 'flex',
        flexDirection: 'column'
    },
    topArea: {
        flex:0.8,
        display: 'flex',
        flexDirection:'row'

    },
    bottomArea: {
        flex: 0.2,

    },
    planetImage: {
        width: '50%',
        height: '100%'
    },
    planetInfo: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'

    },
    planet : {
        width: '90%',
        height: '70%',
        marginTop: 30
    },
    bottomArea: {

    },
    planetDescription: {
        flexDirection: 'row',
    },
    infoAboutPlanet: {

        height: '80%',
        width: '100%',
        marginTop: 10,
        justifyContent: 'space-around'
        
    },
    itemInfoAboutPlanet: {
        display: 'flex',
        flexDirection: 'row',
    },
    textIcons: {
        marginTop: 6, 
        marginLeft: 10, 
        width: '71%', 
        color: '#fff'
    },
    textDescription: {
        marginTop: 6, 
        marginLeft: 10, 
        width: 'auto', 
        color: '#fff'

    },
    title:{
        fontSize: 20,
        color: '#FFF'
    },
})