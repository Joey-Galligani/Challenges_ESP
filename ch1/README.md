# Challenge n°1 - Une simple detection

## Résumé

Utilisation de Nmap ou autre scan de port dans le but de trouver le port http sur lequel est la page web statique dans laquelle il y a le flag.

## Méthode

utiliser nmap pour scanner les ports :

```sh
nmap -p- "ip ou hostname"

# ici -p- précise que le scan doit s'effectuer sur tout les ports de la machine
```

Dans le navigateur entré `http://"ip ou hostname":13337/index.html`.

Une fois dessus, il faut inspecter la page et trouver le commentaire dans le code html où il y a le flag.

## Indices

**1er** indice `NMAP` pour utilisation de nmap.

**2ème** indice `>1000` pour faire comprendre que le scan doit chercher un port superieur a 1000 et donc ajjouter option -p-.

**3ème** indice `F12` pour une fois sur la page que l'utilisateur inspecte la page et regarde le code source pour trouver le flag.

## Énoncé du challenge

Bienvenue dans cette petite aventure numérique !
Un serveur web a été découvert à l'adresse `ip ou hostname`. Il semble contenir des indices, mais attention : tout n'est peut-être pas ce qu'il paraît...

## Pour Tester en local

```bash
docker build -t ch1-challenge .
docker run -p 13337:13337 ch1-challenge
```
