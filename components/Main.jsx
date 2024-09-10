import { View, Text, ActivityIndicator, FlatList, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { getAllCountries } from '../libs/FetchQuery';
import { AnimatedCountrieCard } from './CountrieCard';
import { Screen } from './Screen';
import { Stack, Link } from 'expo-router';


export default function Main() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllCountries().then((data) => {
      setCountries(data);
    })
      .catch((error) => {
        setError(error);
      });
  }, []);

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
          headerTitle: 'Countries',
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
      <View>
        {countries?.length === 0 &&
          (
            <ActivityIndicator color={"#000"} size={"large"} />
          )
        }
        {countries &&
          <FlatList
            data={countries}
            keyExtractor={(item) => item.name_en}
            renderItem={({ item, index }) => (<AnimatedCountrieCard countrie={item} index={index} />)}
          />
        }
      </View>
    </Screen>
  );
}