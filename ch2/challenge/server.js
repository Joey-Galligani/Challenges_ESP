const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080']
}));
app.use(express.static('public'));

const credentials = {
    username: 'admin',
    password: 'john1993',
    flag: 'Ch2_4uth3nt1c4t10n_1s_0k'
};

app.post('/api/auth', (req, res) => {
    const { username, password } = req.body;
    
    setTimeout(() => {
        if (username === credentials.username && password === credentials.password) {
            res.json({ success: true, flag: credentials.flag });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    }, 1000);
});

app.listen(port, () => {
    console.log(`Auth server running at http://localhost:${port}`);
}); 