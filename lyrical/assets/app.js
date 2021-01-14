// Iniatializing pointers
const input = document.getElementById('input');
const x = document.getElementById('txt');
const result = document.getElementById('result');

/*
 * FETCH IS DONE!!!
 * ONLY REST IS TO DESIGN IN CSS
 */

/// api URL ///
const apiURL = 'https://api.lyrics.ovh';

//Adding Eevent Listeners to the button
function btn() {
    inputValue = input.value.trim();

    if (!inputValue) alert('Input is empty, nothing to search!');
    else searchSong(inputValue);
}

// Search The Song
async function searchSong(inputValue) {
    const searchResult = await fetch(apiURL + '/suggest/' + inputValue);
    const data = await searchResult.json();

    console.log(data);
    fetchData(data);
}

// Fetch The Data
function fetchData(data) {
    result.innerHTML = `<ul class="song-list">${data.data
        .map(
            (song) =>
                `<li>
            <span data-artist="${song.artist.name}" data-songtitle="${song.title}" class="cards">
            <div>
                <strong>${song.title}</strong> <i>by</i> <p>${song.artist.name}</p>
            </div>
                <img src="${song.album.cover}" alt="Album art">
            </span>
            </li>`
        )
        .join('')}
    </ul>`;
}

//event listener in get lyrics button
result.addEventListener('click', (e) => {
    const clickedElement = e.target;

    //checking clicked elemet is button or not
    if (clickedElement.className === 'cards') {
        const artist = clickedElement.getAttribute('data-artist');
        const songTitle = clickedElement.getAttribute('data-songtitle');

        getLyrics(artist, songTitle);
    }
});

// Get lyrics for song
async function getLyrics(artist, songTitle) {
    const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
    const data = await res.json();

    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

    result.innerHTML = `<h2 class="song-name">${songTitle}</h2>
                        <p class="by">by</p>
                        <p class="artist-name">${artist}</p>
                        <p class="song-lyrics">${lyrics}</p>`;
}
