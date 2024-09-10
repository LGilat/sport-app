import { useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Animated } from 'react-native';




export function RenderPlayerDetails({ player }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: player?.strThumb }} style={styles.image} />
            <Text style={styles.name}>{player?.strPlayer}</Text>
            <Text style={styles.position}>{player?.strSport}</Text>
            <Text style={styles.position}>{player?.strNationality}</Text>
            <Text style={styles.position}>{player?.strTeam}</Text>
            <Text style={styles.position}>{player?.strPosition}</Text>
            <Text style={styles.position}>{player?.strBirthLocation}</Text>
            <Text style={styles.position}>{player?.strDescriptionES || player?.strDescriptionEN || 'Sin  Descripción'}</Text>
            <Text style={styles.position}>{player?.dateBorn}</Text>
            <Text style={styles.position}>{player?.strStatus}</Text>
            <Text style={styles.position}>Hola amigo</Text>
        </View>
    );
}



export function AnimatedRenderPlayerDetails({ player, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: index * 250,
            useNativeDriver: true,
        }).start();
    }, [opacity, index]);


    return (
        <Animated.View style={{ opacity }}>
            <RenderPlayerDetails player={player} />
        </Animated.View>
    );

}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 8,
        width: '100%',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
       
    },
    position: {
        fontSize: 16,
        color: '#666',
    },
});