import { Text, TextInput, View, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { searchPlayersByName } from '../libs/FetchQuery';
import { Screen } from '../components/Screen';
import { AnimatedPlayer } from '../components/Player';





export default function SearchPlayers() {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('Lionel Messi');

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const players = await searchPlayersByName(searchQuery);
                setPlayers(players);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchPlayers();


    }, [searchQuery]);

    const renderContent = () => {
        if (loading) {
            return <ActivityIndicator size="large" color="#0000ff" />;
        }
        if (error) {
            return <Text>Error: {error.message}</Text>;
        }
        return (
            <>
                <TextInput
                    style={styles.input}
                    placeholder="Search players by name"
                    placeholderTextColor="#999"
                    onChangeText={setSearchQuery} />

                {players && (
                    <FlatList
                        data={players}
                        keyExtractor={(item) => item.idPlayer}
                        renderItem={({ item, index }) => <AnimatedPlayer player={item} index={index} />}
                    />
                )}
            </>
        );
    };

    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#ffee00" },
                    headerTintColor: "black",
                    headerLeft: () => { },
                    headerTitle: 'Search Players',
                    headerRight: () => { },

                }} />
            <Text>Search Players</Text>
            <View>
                <Text>Search Query: {searchQuery}</Text>
                {renderContent()}
            </View>
        </Screen>
    );

}


const styles = StyleSheet.create({
    input: {
        height: 30,
        width: 300,
        marginBottom: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: 'white',
    }
})