## RUN 

```
npm i
cd ./db
psql -f install.sql -U postgres
psql -d example -f structure.sql -U diophant
psql -d example -f data.sql -U diophant
cd ../
node main.js
```

- Before using, download and install postgresql.
postgres password: <your-password>
diophant password: "diophant"

- To change the protocol of communication between the client and the server, 
uncomment two lines in the config.js and client.js files

- In the client.js examples of database interaction
