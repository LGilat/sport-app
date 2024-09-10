import { Text, FlatList, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import  React, { useEffect, useState } from 'react';
import { AnimatedTeamsInLeague } from '../../components/TeamsInLeague';
import { searchTeamInLeague } from '../../libs/FetchQuery';
import { Screen } from '../../components/Screen';



export default function TeamsInLeague(){
    const [teams, setTeams] = useState([]);
    const [error, setError] = useState(null);
    const {id} = useLocalSearchParams();

    useEffect(() => {
        if (id) {
            searchTeamInLeague(id).then((data) => {
                setTeams(data);
            })
            .catch((error) => {
                setError(error);
            });
        }
        
    }, [id]);

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
                    headerTitle: id || "Cargando...",
                    headerRight: () => { },
                }}
            />
            {teams?.length === 0 && (
                <ActivityIndicator color={"#000"} size={"large"} />
            )}
            {teams && (
                <FlatList
                    data={teams}
                    style={{ width: '100%',borderRadius: 20, borderWidth: 5, borderColor: '#CCC' , padding: 10 }}
                    keyExtractor={(item, index) =>  teams.idAPIfootball}
                    renderItem={({ item,index }) => <AnimatedTeamsInLeague teams={item} index={index} />}
                />
            )}
        </Screen>
    );
}