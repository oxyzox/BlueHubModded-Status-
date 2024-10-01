const serverIP = 'lizardfish.aternos.host:57741'; 


async function fetchServerStatus() {
    const url = `https://api.mcstatus.io/v2/status/java/${serverIP}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.online) {
            document.getElementById('status').textContent = 'Online 🟢';
            document.getElementById('status').classList.add('online');
            document.getElementById('players').textContent = `Players: ${data.players.online}/${data.players.max}`;
            document.getElementById('version').textContent = `Version: ${data.version.name}`;
            document.getElementById('motd').textContent = `MOTD: ${data.motd.clean}`;
        } else {
            document.getElementById('status').textContent = 'Offline 🔴';
            document.getElementById('status').classList.add('offline');
            document.getElementById('players').textContent = 'Players: --/--';
            document.getElementById('version').textContent = 'Version: --';
            document.getElementById('motd').textContent = 'MOTD: --';
        }
    } catch (error) {
        document.getElementById('status').textContent = 'Error fetching server status ⚠';
        document.getElementById('status').classList.add('offline');
        document.getElementById('players').textContent = 'Players: --/--';
        document.getElementById('version').textContent = 'Version: --';
        document.getElementById('motd').textContent = 'MOTD: --';
        console.error('Error fetching server status:', error);
    }
}


fetchServerStatus();
setInterval(fetchServerStatus, 30000); 
