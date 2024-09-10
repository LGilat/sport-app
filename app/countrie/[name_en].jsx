import { Text, FlatList, ActivityIndicator, Pressable } from 'react-native';
import { useLocalSearchParams, Stack, Link } from 'expo-router';
import  React, { useEffect, useState } from 'react';
import { AnimatedLeagueCard } from '../../components/LeagueCard';
import { getLeaguesByName } from '../../libs/FetchQuery';
import { Screen } from '../../components/Screen';




export default function League() {
    const [leagues, setLeagues] = useState([]);
    const [error, setError] = useState(null);
    const { name_en } = useLocalSearchParams();

    useEffect(() => {
        if (name_en) {
            getLeaguesByName(name_en).then((data) => {
                setLeagues(data);
            })
            .catch((error) => {
                setError(error);
            });
        }

    }, [name_en]);

    if (error) {
        return <Text>Error: {error.message}</Text>;
    }

    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#ffee00" },
                    headerTintColor: "black",
                    headerLeft: () => { },
                    headerTitle: name_en || "Cargando...",
                    headerRight: () => (
                        <Link href="/SearchPlayers" asChild>
                            <Pressable 
                            onPress={() => { console.log("Pressed") }}
                            style={{ marginRight: 10, borderWidth: 1, borderColor: "black", padding: 10, borderRadius: 10 }}
                            >
                                <Text>Press me</Text>
                            </Pressable>
                        </Link>
                    )
                }}
            />
            {leagues?.length === 0 && (
                <ActivityIndicator color={"#000"} size={"large"} />
            )}
            {leagues && (
                <FlatList
                    data={leagues}
                    keyExtractor={(item) => item.idLeague}
                    renderItem={({ item, index }) => <AnimatedLeagueCard league={item} index={index} />}
                />
            )}
        </Screen>
    );

}