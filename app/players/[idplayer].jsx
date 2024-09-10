import { FlatList, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { searchPlayerById } from '../../libs/FetchQuery';
import { Screen } from '../../components/Screen';
import { AnimatedRenderPlayerDetails } from '../../components/PlayerDetails';




export default function PlayerDetails() {
    const { idplayer } = useLocalSearchParams();
    const [player, setPlayer] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nombre, setNombre] = useState('');

    useEffect(() => {
        if (idplayer) {
            searchPlayerById(idplayer).then((data) => {
                setPlayer(data);
                setLoading(false);
                setNombre(data.strPlayer);
            });
        }
    }, [idplayer]);


    return (
        <Screen>
            <Stack.Screen options={{ headerTitle: nombre }} />
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={player}
                    keyExtractor={(item) => item.idplayer}
                    renderItem={({ item, index }) => (
                        <AnimatedRenderPlayerDetails player={item} index={index} />
                    )}
                />

            )}
        </Screen>
    );
}