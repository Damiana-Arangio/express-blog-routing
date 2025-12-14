<p align="center">
  <img src="./img/boolean-logo.png" alt="Boolean Logo" width="35">
</p>

<h1 align="center">Express Blog Routing</h1>

Applicazione backend sviluppata con **Express.js** che introduce il routing REST per l’entità post tramite router dedicati.

---

## Obiettivo

- Comprendere e applicare il concetto di routing in Express
- Separare le rotte dal file principale dell’applicazione
- Organizzare le API tramite `express.Router()`
- Gestire parametri dinamici nelle URL secondo le convenzioni REST

---

## Funzionalità implementate

- Creazione di un router dedicato per l’entità post
- Implementazione delle operazioni CRUD secondo le convenzioni REST
- Gestione di endpoint con parametri dinamici
- Restituzione di risposte testuali per confermare l’operazione richiesta
- Registrazione del router in `app.js` con prefisso `/posts`

## Avvio dell'applicazione

Installare le dipendenze ed eseguire lo script:
```bash
    npm install
    npm run start
```

Per avviare il server in modalità watch:
```bash
    npm run watch
```

## Tecnologie utilizzate

- Node.js
- Express.js
- JavaScript