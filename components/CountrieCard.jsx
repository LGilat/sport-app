import { Text, View, Image, StyleSheet, Animated, Pressable } from 'react-native';
import { useEffect, useRef } from "react";
import { Link } from 'expo-router';



export function CountrieCard({ countrie }) {
    return (
        <Link href={`/countrie/${countrie.name_en}`} asChild>
            <Pressable
                key={countrie.name_en}
                onPress={() => console.log('País presionado:', countrie.name_en)}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#f0f0f0' : 'transparent',
                    },
                ]}
                
            >
                <View key={countrie.name_en} style={styles.card} >
                    <Image source={{ uri: countrie.flag_url_32 }} style={styles.image} />
                    <View style={styles.info}>
                        <Text style={styles.title}>{countrie.name_en}</Text>
                    </View>
                </View>

            </Pressable>
        </Link>
    );
}

export function AnimatedCountrieCard({ countrie, index }) {
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
            <CountrieCard countrie={countrie} />
        </Animated.View>
    );

}


const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
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
    info: {
        color: '#000',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});