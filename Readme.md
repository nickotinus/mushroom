What is the Mushroom?
===
Technology for quick SQL-driven client prototyping. 

Key idea: Design database, register named SQLs on backend, access SQLs from Angular code by their names. 

Benefits: 
1. Developer saves much time on Backend API, DAO, DTO, mappers development;
1. Easy client to backend integration.

Current limitations:
1. Security. currently all SQLs are accessible from frontend. Needs to integrate with Spring Security and assign SQLs to Roles;
1. No trusted backend data transformation. For this case another API endpoint should be used;
1. No way to run backend scenarios like sending email. For this case another API endpoint should be used.

Base steps:
1. Design database and put its creation DDL to `mushroom-java-backend\src\main\resources\db\initialize.sql`;
1. Write required SQLs and save them into `mushroom-java-backend\src\main\resources\com\telmion\queries.properties`;
1. Develop Angular client by accessing SQLs over `mushroom-angular-frontend\MushroomDEMO\src\app\mushroom\services\mushroom.ts` interface.

The next steps
===
1. Extract "Mushroom communication transport library" from backend and frontend for easy integration into projects;
1. Migrate Mushroom internal API to Swagger API-first;
1. Integrate backend with Spring Security to use Role-based API protection;
1. Implement Node.js version of backend;
1. Implement client libraries for another technologies.


How to run on local machine
===
1. Create Postgres database:

   1. `CREATE DATABASE mushroomdb;`

   1. `CREATE USER mushroom_owner WITH password 'mushroom123';`

   1. `GRANT ALL ON DATABASE mushroomdb TO mushroom_owner;`

1. Install Angular's dependencies:
    1. `cd mushroom\mushroom-angular-frontend\MushroomDEMO`
    1. `npm install`
1. Build Maven project
    1. `cd mushroom`
    1. `clean install of mushroom maven module`
1. Start application
    1. Start "Backend" Idea's run configuration (mvn jetty:run)
    1. Start "Frontend" Idea's run configuration (ng serve)