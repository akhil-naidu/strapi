[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/H7Hd5f?referralCode=I9okFq)

## ✨ Features

- Strapi
- Postgres

## Todo

- NextJS
- Redis

## Development Setup

### Prerequisites

1. Instal Nodejs with a minimum version of 16
2. Install Postgres server locally and create a database named `postgres` with a username `strapi` and password `strapi` and start it on port `5432`

```sql
CREATE USER strapi WITH ENCRYPTED PASSWORD 'strapi';
GRANT ALL PRIVILEGES ON DATABASE postgres TO strapi;
```

3. Clone the repository
4. `yarn` to install all the dependencies
5. `yarn develop` to build and start Strapi for development
