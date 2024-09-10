import { Text, View, Image, StyleSheet, Animated, Pressable } from 'react-native';
import { useEffect, useRef } from "react";
import { Link } from 'expo-router';




export function TeamsInLeague({ teams }) {
    return (
        <Link href={`/details/${teams.strTeam}`} asChild>
            <Pressable
                key={teams.name_en}
                onPress={() => console.log('País presionado:', teams.strTeam)}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#f0f0f0' : 'transparent',
                    },
                ]}

            >
                <View style={styles.card} key={teams?.idTeam}>
                    <Image source={{ uri: teams?.strBadge }} style={styles.image} />
                    <View style={styles.info}>
                        <Text style={styles.title}>{teams?.strTeam}</Text>
                    </View>

                </View>
            </Pressable>
        </Link>
    );
}



export function AnimatedTeamsInLeague({ teams, index }) {
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
            <TeamsInLeague teams={teams} />
        </Animated.View>
    );

}


const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginBottom: 4,

    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    info: {
        color: '#333',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});