# Popular times robot

Um Scraper que captura do google maps, as informações dos horários populares de um estabelecimento 

![alt text](https://i.ibb.co/jfSFRn2/popular-times.png)

Este projeto foi feito com propósito de aperfeiçoar e compartilhar conhecimento

## Iniciando

As instruções a seguir vão te dizer como executar a API para que ela possa ser consumida


### Pre-requisitos

- Ter o Node.js instalado


    - Tutorial de como instalar o Node.js no Linux: https://phoenixnap.com/kb/install-latest-node-js-and-nmp-on-ubuntu

    - Instalador do Node.js no Windows: https://nodejs.org/en/download/


- Ter o yarn instalado

    - Tutorial de como instalar o Yarn (Escolha o seu sistema operacional na página do tutorial): https://legacy.yarnpkg.com/en/docs/install#debian-stable


### Instalando dependências do projeto

Instale as dependências executando o comando `yarn` no terminal na pasta do projeto:

```
~/popular-times-robot
$ yarn
```

### Compilando o projeto
```
~/popular-times-robot
$ yarn build
```

### Executando o projeto
```
~/popular-times-robot
$ yarn start
```

## Como funciona

Ao executar o arquivo `app.ts`, o script acessa a página do google maps de cada estabeleciemnto passado como entrada e captura as informações de horários populares para o estabeleciemnto em questão. 

Obs.1: Foi feito um levantamento prévio das url`s de alguns estabelecimentos no google maps.

Obs.2: As url's estão no arquivo `sample.stores.ts`.


Exempo de um estabelecimento: 
```javascript
{
    name: "Mateus Turuzinho",
    mapsUrl: "https://www.google.com/maps/place/Mateus+Supermercados+Turuzinho/@-2.5016142,-44.2304185,17z/data=!3m1!4b1!4m5!3m4!1s0x7f691b68236f69f:0x9ed738bb64a29b79!8m2!3d-2.5016142!4d-44.2282298",
    hasPopularTimes: true
}
```

### Resultado
- Os dados são mostrados no console como no exemplo abaixo:
```json
[
  {
    "store": {
      "name": "Mateus Hiper Balsas",
      "mapsUrl": "https://www.google.com/maps/place/Hiper+Mateus+Balsas/@-5.0113964,-47.3891972,7z/data=!4m8!1m2!2m1!1ssupermercados+Mateus+Hiper+Balsas!3m4!1s0x92d5ef979bb0a613:0x37f7f9482bd294c9!8m2!3d-7.5266667!4d-46.0444444",
      "hasPopularTimes": true
    },
    "popularTimes": [
      {
        "date": "2020-10-21T11:40:42.255Z",
        "time": "06:00",
        "value": 0
      },
      {
        "date": "2020-10-21T11:40:42.255Z",
        "time": "07:00",
        "value": 20
      },
      {
        "date": "2020-10-21T11:40:42.255Z",
        "time": "08:00",
        "value": 37
      },
      {
        "date": "2020-10-21T11:40:42.255Z",
        "time": "09:00",
        "value": 53
      },
      {
        "date": "2020-10-21T11:40:42.255Z",
        "time": "10:00",
        "value": 59
      },

      ...

      {
        "date": "2020-10-21T11:40:42.256Z",
        "time": "19:00",
        "value": 71
      },
      {
        "date": "2020-10-21T11:40:42.256Z",
        "time": "20:00",
        "value": 57
      },
      {
        "date": "2020-10-21T11:40:42.256Z",
        "time": "21:00",
        "value": 39
      },
      {
        "date": "2020-10-21T11:40:42.256Z",
        "time": "22:00",
        "value": 0
      },
      {
        "date": "2020-10-21T11:40:42.256Z",
        "time": "23:00",
        "value": 0
      }
    ]
  }
]
```

## Construido com
* Typescript

* [@types/node](https://www.npmjs.com/package/@types/node) 
* [@types/puppeteer](https://www.npmjs.com/package/@types/puppeteer) 
* [cpy-cli](https://www.npmjs.com/package/cpy-cli) 
* [del-cli](https://www.npmjs.com/package/del-cli) 
* [nodemon](https://www.npmjs.com/package/nodemon) 
* [ts-node](https://www.npmjs.com/package/ts-node) 
* [typescript](https://www.npmjs.com/package/typescript)
* [puppeteer](https://github.com/puppeteer/puppeteer)

## Licença

Esse projeto está sob a MIT License

