import { Text, View, Image, StyleSheet, Animated, Pressable } from 'react-native';
import { useEffect, useRef } from "react";
import { Link } from 'expo-router';



export function LeagueCard({ league }) {
    return (
        <Link href={`/teams/${league.strLeague}`} asChild>
            <Pressable
                key={league.name_en}
                onPress={() => console.log('País presionado:', league.strLeague)}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#f0f0f0' : 'transparent',
                    },
                ]}
                
            >
                <View key={league.idLeague} style={styles.card} >
                    <Image source={{ uri: league.strFanart1 ? league.strFanart1: league.strBadge}} style={styles.image} />
                    <View style={styles.info}>
                        <Text style={styles.title}>{league.strLeague}</Text>
                    </View>
                </View>
            </Pressable>
        </Link>
    );
}



export function AnimatedLeagueCard({ league, index }) {
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
            <LeagueCard league={league} />
        </Animated.View>
    );

}


const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
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