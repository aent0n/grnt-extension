const artist = document.getElementById('currentArtist').textContent;
const song = document.getElementById('currentSong').textContent;

chrome.runtime.sendMessage({ artist: artist, song: song });
