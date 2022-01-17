- Run docker-compose up -d

- GraphQL endpoint will be http://localhost:8080/v1/graphql
- Hasura Console will be available on http://localhost:8080/console
- pgAdmin will be available on http://localhost:5050
```
Vào pgadmin: pgadmin@example.com/admin
Tạo db với username: postgres, host: postgres, pass: postgrespassword
```
```
Cài hasura CLI

Cd vào thư mục hasura chạy các câu lệnh
hasura migrate apply
hasura metadata apply
hasura seed apply
```

```
Chạy node:
cd nodejs-express
npm install
npm start
```

```
Chạy next:
cd next
npm install
npm run dev
```hasura seed apply
