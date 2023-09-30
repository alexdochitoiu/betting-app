# betting-app

Online betting dashboard

---

# Set up and run the application

## Prerequisites

- Docker (with docker-compose)
- Node

### Setting up the Server
#### * Change directory to `server` and do the following:

#### Create a `.env` file with the following content
```ini
PORT=4000
DB_USER=root
DB_PASSWORD=admin
DB_HOST=localhost
DB_PORT=5432
DB_NAME=postgres
JWT_SECRET_KEY=your_top_secret_jwt_key
```

#### Create postgres database and run it using docker-compose
```bash
$ docker-compose up -d
```

#### Install dependencies, build and run the app
```bash
$ npm install
$ npm run build
$ npm start
```
---
### Setting up the React application
#### * Change directory to `ui` and run the following commands:
```bash
$ npm install
$ npm run dev
```