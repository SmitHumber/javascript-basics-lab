// Array Declaration

console.log(`Array Access`);

let songs = ['Starboy', 'Uptown Funk', 'Thriller'];

let artists = ['The Weeeknd', 'Bruno Mars', 'Micheal Jackson']

let genres = ['R&B/Pop','Funk', 'Rock'];

let favorite = ['']


console.log(songs);
console.log(artists);
console.log(genres);
console.log(favorite);

console.log(` Array Declaration`)

// Array Access

function displaySelectedSong(firstSong, middleSong, lastSong){

return ['Starboy', 'Party Monster', 'False Alarm']

};

let songList = displaySelectedSong();
console.log(songList)


// Array Properties

console.log(`Array Properties`);


function showMusicStats(musicStats){
    return ['Song Name', 'Artist Name', 'Gengres'];
};


let musicStats = showMusicStats();
console.log(musicStats.length)


// Adding Items

console.log(`Adding Items`);

const album1 = ["Bad", "Off The Wall", "Thriller"];

album1.push("Dangerous");
console.log(album1)

const album2 = ['Starboy', 'Party Monster', 'False Alarm'];

console.log(album2.unshift("Reminder"));

console.log(album2)


// Removing Items

console.log(`Removing Items`);

const album3 = ["Bad", "Off The Wall", "Thriller", "Dangerous"];

album3.pop(album3.pop());

console.log(album3);


const album4 = ['Starboy', 'Party Monster', 'False Alarm', 'Reminder'];

console.log(album4.shift("Reminder"));

console.log(album4)


// Array Iteration

console.log(`Array Iteration`);

function displayAllSongForEach(){

const songList = ["Bad", "Off The Wall", "Thriller"];
songList.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

};

displayAllSongForEach();

createFormattedSongList();

function createFormattedSongList(){
    const formattedSong = ['Intro', 'Verse', 'Outro']
    formattedSong.map(Math.sqrt);  

    console.log(formattedSong)
}

createFormattedSongList();


// Array Searching

console.log(`Array Searching`);

function songIndex(){

    const song = ["24K Magic", "Versace on the Floor", "That's What I Like"];

    console.log(song.indexOf("24K Magic"));

    console.log(song.indexOf("Versace on the Floor"));

    console.log(song.indexOf("That's What I Likec"));
}

songIndex()

function songIncludes(){


    const artistSong = ["Starboy", "Save Your Tears", "The Hills"];

    console.log(artistSong.includes("Save Your Tears")); // True Statement

    console.log(artistSong.includes("Uptown Funk")); // False Statement

}

songIncludes();


// Array Destructuring


console.log(`Array Destructuring`);

function removingSongList(){

    let songList = ["Bad", "Off The Wall", "Thriller"];

    let [firstSong, secondSong] = songList;

    console.log(firstSong)
    console.log(secondSong);

}


removingSongList()
