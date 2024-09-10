const ALL_COUNTRIES = "https://www.thesportsdb.com/api/v1/json/3/all_countries.php";
export async function getAllCountries(){
    const rawData = await fetch(ALL_COUNTRIES,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    });
    
    const json = await rawData.json();
    const { countries } = json;
    return countries;
}


export async function getLeaguesByName(name){
    const LEAGUES_BY_NAME = `https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=${name}`;
    const rawData = await fetch(LEAGUES_BY_NAME,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    });

    const json = await rawData.json();
    const { countries } = json;
    return countries;

}


export async function searchPlayersByName(name){
    const PLAYERS_BY_NAME = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${name}`;
    const rawData = await fetch(PLAYERS_BY_NAME,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    });

    const json = await rawData.json();
    const { player } = json;
    return player;

}

export async function searchTeamByName(name){
    const TEAMS_BY_NAME = `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${name}`;
    const rawData = await fetch(TEAMS_BY_NAME,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    });

    const json = await rawData.json();
    const { teams } = json;
    return teams;
}


export async function searchTeamInLeague(nameleague){
    const TEAMS_BY_NAME = `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${nameleague}`;
    const rawData = await fetch(TEAMS_BY_NAME,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    });

    const json = await rawData.json();
    const { teams } = json;
    return teams;
}

export async function searchPlayerById(id){
    const PLAYERS_BY_ID = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`;
    const rawData = await fetch(PLAYERS_BY_ID,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    });
    const json = await rawData.json();
    const { players } = json;
    return players;
}




