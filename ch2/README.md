# Challenge 2 - Tout est sous tes yeux

## Installation

Construire l'image Docker :

```bash
docker build -t ch2-challenge .
```

Lancer le conteneur :

```bash
docker run -p 3000:3000 -p 8080:8080 ch2-challenge
```

## Accès

- Interface web : `http://localhost:8080`
- API : `http://localhost:3000`

## Objectif

Trouver l'application avec un scan Nmap ou autre scan de port. Une fois sur le front-end, il va falloir trouver le mot de passe de l'administrateur en se basant sur les informations données par nos recherches. Il faut trouver le mot de passe `john1993` qui est son prénom + la meilleure année de son club de football favori.

## Indices

- Prénom
- Année OM

## Énoncé

Cher stagiaire, tu dois réussir à trouver et te connecter à l'application de notre cible en cliquant sur ce lien `ip ou hostname`. Nous avons fait nos recherches sur l'administrateur de l'application :

Prénom : John
Nom : Sinat
Âge : 34 ans
Ville : Toulon
Passions : Football (supporte l'Olympique de Marseille), jeux vidéo (FIFA, Call of Duty, etc.) et MMA (fan de BSD)

Nous avons donc sélectionné pour toi des sources d'informations qui pourraient t'aider :

Olympique de Marseille (OM) :
`https://en.wikipedia.org/wiki/Olympique_de_Marseille`

FIFA :
`https://en.wikipedia.org/wiki/FIFA_(video_game_series)`

Call of Duty :
`https://en.wikipedia.org/wiki/Call_of_Duty`

MMA : Benoît Saint Denis (BSD)
`https://en.wikipedia.org/wiki/Benoît_Saint_Denis`
