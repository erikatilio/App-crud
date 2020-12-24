# INSTALAÇÕES
npm install express
npm install body-parser
npm install --save-dev nodemon
npm install mysql2
npm install sequelize sequelize-cli path

# SEQUELIZE-CLI
npx sequelize-cli init
npx sequelize-cli model:create -name <nome da tabela> --attributes <nome:tipo>
npx sequelize-cli db:migrate
npx sequelize-cli seed:generate --name demo-<nome da tabela a popular>
npx sequelize-cli db:seed:all
npx sequelize db:seed:undo:all