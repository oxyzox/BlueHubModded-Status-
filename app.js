const serverIP = 'BlueHubModded.aternos.me';


async function fetchServerStatus() {
    const url = `https://api.mcsrvstat.us/2/${serverIP}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.online) {
            document.getElementById('status').textContent = 'Online 🟢';
            document.getElementById('status').classList.add('online');
            document.getElementById('players').textContent = `Players: ${data.players.online}/${data.players.max}`;
            document.getElementById('version').textContent = `Version: ${data.version}`;
        } else {
            document.getElementById('status').textContent = 'Offline 🔴';
            document.getElementById('status').classList.add('offline');
            document.getElementById('players').textContent = 'Players: lonely srv';
            document.getElementById('version').textContent = 'Version: ⚠';
        }
    } catch (error) {
        document.getElementById('status').textContent = 'Error fetching server status ⚠';
        document.getElementById('status').classList.add('offline');
        document.getElementById('players').textContent = 'Players: error fetching';
        document.getElementById('version').textContent = 'Version: error fetching';
        console.error('Error fetching server status:', error);
    }
}


fetchServerStatus();
setInterval(fetchServerStatus, 3000); 
