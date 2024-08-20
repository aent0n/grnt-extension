

const clientId = '1275422825917841512'; 

let rpc = null;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.artist && request.song) {
    setActivity(request.artist, request.song);
  }
});

function setActivity(artist, song) {
  if (!rpc) {
    rpc = new DiscordRPC.Client({ transport: 'websocket' });
    rpc.on('ready', () => {
      updatePresence(artist, song);
    });
    rpc.login({ clientId }).catch(console.error);
  } else {
    updatePresence(artist, song);
  }
}

function updatePresence(artist, song) {
  rpc.setActivity({
    details: `${artist} - ${song}`,
    state: 'Listening to Grünt Radio',
    largeImageKey: 'gruntmag-logo', // Replace with your image key
    largeImageText: 'Gruntmag Radio',
    instance: false,
  });
}
