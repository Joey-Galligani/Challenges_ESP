async function verifyCredentials(username, password) {
    try {
        const response = await fetch('http://localhost:3000/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (data.success) {
            return data.flag;
        }
        return false;
    } catch (error) {
        console.error('Erreur de connexion à l\'API:', error);
        return false;
    }
}

window.auth = {
    verifyCredentials: verifyCredentials
}; 