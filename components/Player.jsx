import { Text, View, Image, StyleSheet, Animated, Pressable } from 'react-native';
import { useEffect, useRef } from "react";
import { Link } from 'expo-router';


export function Player({ player }) {
    return (
        <Link href={`/players/${player.idPlayer}`} asChild>
            <Pressable
                key={player.idPlayer}
                onPress={() => console.log('País presionado:', player.strPlayer)}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#f0f0f0' : 'transparent',
                    },
                ]}

            >
                <View style={styles.container}>
                    <Image
                        source={player?.strBanner || player?.strCutout || player?.strThumb ?
                            { uri: player?.strBanner || player?.strCutout || player?.strThumb } : require('../assets/default_soccer.jpg')}
                        defaultSource={require('../assets/favicon.png')}
                        style={styles.image}
                    />
                    <View style={styles.info}>
                        <Text style={styles.name}>{player.strPlayer}</Text>
                        <Text style={styles.position}>{player.strPosition}</Text>
                    </View>
                </View>
            </Pressable>
        </Link>
    )
}


export function AnimatedPlayer({ player, index }) {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim, index]);

    return (
        <Animated.View style={{ opacity: fadeAnim }}>
            <Player player={player} />
        </Animated.View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 2,
        marginVertical: 5,
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        backgroundColor: 'whitesmoke',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    position: {
        fontSize: 14,
        color: '#999',
    },
})