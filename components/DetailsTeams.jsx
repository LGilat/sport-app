import { Text, View, Image, StyleSheet, Animated } from 'react-native';
import { useEffect, useRef } from "react";



export function DetailsTeams({ teams }) {
    return (
        <View style={styles.card} key={teams?.idTeam}>
            <View style={styles.info}>
                <View style={styles.escudoClub}>
                    <Image source={{ uri: teams?.strBadge }} style={styles.image} />
                    <Text style={styles.title}>{teams?.strTeam}</Text>
                </View>
                <View style={styles.infoSection}>
                    <Text style={styles.sectionTitle}>Información General</Text>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>País:</Text>
                        <Text style={styles.value}>{teams?.strCountry}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Deporte:</Text>
                        <Text style={styles.value}>{teams?.strSport}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Género:</Text>
                        <Text style={styles.value}>{teams?.strGender}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Liga:</Text>
                        <Text style={styles.value}>{teams?.strLeague}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Estadio:</Text>
                        <Text style={styles.value}>{teams?.strStadium}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Localización:</Text>
                        <Text style={styles.value}>{teams?.strStadiumLocation || 'Desconocida'}</Text>
                    </View>
                </View>

                <View style={styles.infoSection}>
                    <Text style={styles.sectionTitle}>Información Adicional</Text>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Facebook:</Text>
                        {teams?.strFacebook && (
                            <Text style={styles.socialLink} onPress={() => openSocialMedia(`https://facebook.com/${teams.strFacebook}`)}>
                                Facebook
                            </Text>
                        )}
                        {!teams?.strFacebook && (<Text style={styles.nosociallink}>No disponible</Text>)}
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Twitter:</Text>
                        {teams?.strTwitter && (
                            <Text style={styles.socialLink} onPress={() => openSocialMedia(`https://twitter.com/${teams.strTwitter}`)}>
                                Twitter
                            </Text>
                        )}
                        {!teams?.strTwitter && (<Text style={styles.nosociallink}>No disponible</Text>)}
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Instagram:</Text>
                        {teams?.strInstagram && (
                            <Text style={styles.socialLink} onPress={() => openSocialMedia(`https://instagram.com/${teams.strInstagram}`)}>
                                Instagram
                            </Text>
                        )}
                        {!teams?.strInstagram && (<Text style={styles.nosociallink}>No disponible</Text>)}
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Youtube:</Text>
                        {teams?.strYoutube && (
                            <Text style={styles.socialLink} onPress={() => openSocialMedia(`https://youtube.com/${teams.strYoutube}`)}>
                                YouTube
                            </Text>
                        )}
                        {!teams?.strYoutube && (<Text style={styles.nosociallink}>No disponible</Text>)}
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.label}>RSS:</Text>
                        {teams?.strRSS && (
                            <Text style={styles.socialLink} onPress={() => openSocialMedia(teams.strRSS)}>
                                RSS
                            </Text>
                        )}
                        {!teams?.strRSS && (<Text style={styles.nosociallink}>No disponible</Text>)}
                    </View>

                </View>



            </View>
        </View>

    )
}


export function AnimatedDetailsTeams({ teams, index }) {
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
            <DetailsTeams teams={teams} />
        </Animated.View>
    );

}


const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    escudoClub: {
        marginBottom: 10,
        alignSelf: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 10,
    },
    info: {
        fontSize: 16,
        width: '100%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
    infoSection: {
        marginBottom: 15,
        margin: '0 auto'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        width: '96%',
    },
    label: {
        fontWeight: 'bold',
    },
    value: {
        flex: 1,
        textAlign: 'right',
    },
    socialCard: {
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
    socialLink: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginBottom: 5,
    },
});