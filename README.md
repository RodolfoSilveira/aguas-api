API

## 🛠 Functionalities
* **Show**
  - [x] Cadastro de imagens de cada usuário

## ▶️ Getting started

**1. Clone the project**

```
git clone https://github.com/RodolfoSilveira/aguas-api.git
```

**2. Install dependencies**

```
yarn
```

**3. Run API**

`docker-compose up`
or
`docker-compose up -d`

Entre dentro do container
`docker exec -it api_inema sh`

Rode as migrations
`yarn typeorm migration:run `
