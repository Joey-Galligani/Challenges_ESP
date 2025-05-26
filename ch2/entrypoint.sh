#!/bin/sh

if ! nc -z localhost 3000 || ! nc -z localhost 8080; then
    echo "Les ports 3000 et 8080 doivent être disponibles"
    exit 1
fi

echo "Démarrage des serveurs..."
npm start & 
npx http-server -p 8080 --cors -c-1 &

tail -f /dev/null
