

import { PlaceTimesRobotService, NavigationService } from "./services";
import { Store } from "./types";

const storesMateus: Array<Store> = [
    {
        name: "Mateus Turuzinho",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Supermercados+Turuzinho/@-2.5016142,-44.2304185,17z/data=!3m1!4b1!4m5!3m4!1s0x7f691b68236f69f:0x9ed738bb64a29b79!8m2!3d-2.5016142!4d-44.2282298",
        hasPopularTimes: true
    },
    {
        name: "Mateus Hiper Balsas",
        mapsUrl: "https://www.google.com/maps/place/Hiper+Mateus+Balsas/@-5.0113964,-47.3891972,7z/data=!4m8!1m2!2m1!1ssupermercados+Mateus+Hiper+Balsas!3m4!1s0x92d5ef979bb0a613:0x37f7f9482bd294c9!8m2!3d-7.5266667!4d-46.0444444",
        hasPopularTimes: true
    },
    {
        name: "Mix Caxias",
        mapsUrl: "https://www.google.com/maps/place/Mix+Mateus+Atacarejo/@-3.8035541,-44.6558649,8z/data=!4m8!1m2!2m1!1ssupermercados+Mix+Caxias!3m4!1s0x78e933a33b34da1:0xec410a1dc8ddae9e!8m2!3d-4.859134!4d-43.3480382",
        hasPopularTimes: true
    },
    {
        name: "Mateus Ceara",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Supermercados+Rua+Cear%C3%A1/@-4.0176015,-48.1075826,7z/data=!4m8!1m2!2m1!1ssupermercados+IMPERATRIZ+Matheus+Ceara!3m4!1s0x92c55e34f349199d:0x972d4ea880c96541!8m2!3d-5.5255604!4d-47.4807268",
        hasPopularTimes: true
    },
    {
        name: "Mateus Santa Ines",
        mapsUrl: "https://www.google.com/maps/place/Mix+Mateus+Santa+In%C3%AAs/@-3.662238,-45.3959497,15z/data=!4m8!1m2!2m1!1ssupermercados+Mateus+Santa+Ines!3m4!1s0x92ca9c72919571eb:0x1e8d0348097b0470!8m2!3d-3.6594492!4d-45.395271",
        hasPopularTimes: true
    },
    {
        name: "Mateus Goiás",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Supermercados+Rua+Goi%C3%A1s/@-5.5120092,-47.4801623,17z/data=!3m1!4b1!4m5!3m4!1s0x92c55fc7fa4ba28b:0x8c5da2f94b8caafe!8m2!3d-5.5120092!4d-47.4779736",
        hasPopularTimes: true
    },
    {
        name: "Mateus Cohab",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Supermercados+Cohab/@-2.5351303,-44.225399,18z/data=!4m8!1m2!2m1!1ssupermercados+Mateus+Cohab+S%C3%A3o+Luis!3m4!1s0x7f691b39e92b50d:0x2af12e47514c3d78!8m2!3d-2.5369274!4d-44.2233316",
        hasPopularTimes: true
    },
    {
        name: "Mateus Rio Anil",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Supermercados+Rio+Anil+Shopping/@-2.5333333,-44.2274665,17z/data=!3m2!4b1!5s0x7f691b6d3f6b9cb:0xef822e58e6c903e0!4m5!3m4!1s0x7f69042c8a77667:0xab7948889e9126ae!8m2!3d-2.5333333!4d-44.2252778",
        hasPopularTimes: true
    },
    {
        name: "Mateus Calhau",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Supermercados+Calhau/@-2.4915599,-44.2569832,17z/data=!3m1!4b1!4m5!3m4!1s0x7f68dc792639d41:0x36c8e9ca9c43707f!8m2!3d-2.4915599!4d-44.2547945",
        hasPopularTimes: true
    },
    {
        name: "Mix Icoaraci",
        mapsUrl: "https://www.google.com/maps/place/Mix+Mateus+Atacarejo/@-1.3696648,-48.5336553,12z/data=!4m8!1m2!2m1!1sSupermercados+Mix+Icoaraci+Bel%C3%A9m!3m4!1s0x92a46133e2c7dd11:0xa47c71d09cb4f4b3!8m2!3d-1.3163918!4d-48.4530769",
        hasPopularTimes: true
    },
    {
        name: "Mateus Cidade Operaria",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Supermercados+Cidade+Oper%C3%A1ria/@-2.58201,-44.2080908,17z/data=!3m1!4b1!4m5!3m4!1s0x7f69083d6780ad9:0xab53d7746bea7e07!8m2!3d-2.58201!4d-44.2059021",
        hasPopularTimes: true
    },
    {
        name: "Mateus Mix Tirirical",
        mapsUrl: "https://www.google.com/maps/place/Mix+Atacarejo+Tirirical/@-2.5650312,-44.2312264,17z/data=!3m1!4b1!4m5!3m4!1s0x7f69042c8a77667:0x18087ae64275ebb3!8m2!3d-2.5650312!4d-44.2290377",
        hasPopularTimes: true
    },
    {
        name: "Mateus Shopping Da Ilha",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Supermercado+-+Shopping+da+Ilha/@-2.5274341,-44.2572189,17z/data=!3m1!4b1!4m5!3m4!1s0x7f68e237ff72b01:0xc4afb1d74379b5cd!8m2!3d-2.5274341!4d-44.2550302",
        hasPopularTimes: true
    },
    {
        name: "Mateus Mix Curva Do 90",
        mapsUrl: "https://www.google.com/maps/place/Mix+Mateus+Atacarejo+Vinhais/@-2.5182015,-44.2599777,17z/data=!3m1!4b1!4m5!3m4!1s0x7f68e10929ba449:0x2571fd282b68078!8m2!3d-2.5182015!4d-44.257789",
        hasPopularTimes: true
    },
    {
        name: "Mateus Cajazeiras",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Supermercados+Centro+(Cajazeiras)/@-2.5367784,-44.3024311,17z/data=!3m1!4b1!4m5!3m4!1s0x5455401d056d271:0xbd643e9fcb5195a3!8m2!3d-2.5367784!4d-44.3002424",
        hasPopularTimes: true
    },
    {
        name: "Mateus Super Turu",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Super+Turu/@-2.5122754,-44.2272558,17z/data=!3m1!4b1!4m5!3m4!1s0x7f6918b8d7ed3a7:0xb87ee91b24e46038!8m2!3d-2.5122754!4d-44.2250671",
        hasPopularTimes: true
    },
    {
        name: "Mateus Mix Jardim Tropical",
        mapsUrl: "https://www.google.com/maps/place/Mix+Mateus+Jardim+Tropical/@-2.5683768,-44.1910558,17z/data=!3m1!4b1!4m5!3m4!1s0x7f690a0691b3247:0x828e3a019cebc507!8m2!3d-2.5683768!4d-44.1888671",
        hasPopularTimes: true
    },
    {
        name: "Mateus Mix Timon",
        mapsUrl: "https://www.google.com/maps/place/Mix+Atacarejo/@-5.0927689,-42.8259158,17z/data=!3m1!4b1!4m5!3m4!1s0x78e377f4b4982e5:0xb555ac267807dc!8m2!3d-5.0927689!4d-42.8237271",
        hasPopularTimes: true
    },
    {
        name: "Mateus Bacanga",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Supermercados+Bacanga/@-2.5552678,-44.3135774,17z/data=!3m1!4b1!4m5!3m4!1s0x7f68f4501190331:0x557308787d5fe0f7!8m2!3d-2.5552678!4d-44.3113887",
        hasPopularTimes: true
    },
    {
        name: "Mateus Super Renascenca",
        mapsUrl: "https://www.google.com/maps/place/Hiper+Mateus+Renascen%C3%A7a/@-2.5087031,-44.2740951,14z/data=!4m8!1m2!2m1!1sSupermercados+Mateus+Super+Renascenca+S%C3%A3o+Lu%C3%ADs!3m4!1s0x7f68df47a8bf475:0xafafdc9624bb778d!8m2!3d-2.5037828!4d-44.2881038",
        hasPopularTimes: true
    },
    {
        name: "Mateus Mix Chapadinha",
        mapsUrl: "https://www.google.com/maps/place/Mix+Mateus+Atacarejo+Chapadinha/@-3.7487216,-43.3471807,17z/data=!3m1!4b1!4m5!3m4!1s0x78ccf60dbe8be59:0xcee6f5d71f101404!8m2!3d-3.7487216!4d-43.344992",
        hasPopularTimes: true
    },
    {
        name: "Mateus Mix Pedreiras",
        mapsUrl: "https://www.google.com/maps/place/Mix+Mateus+Pedreiras/@-4.5815687,-44.5838238,17z/data=!3m1!4b1!4m5!3m4!1s0x7898831c471cdb5:0x13b2c65b8e17ffd8!8m2!3d-4.5815687!4d-44.5816351",
        hasPopularTimes: true
    },
    {
        name: "Mateus Mix Sta Ines",
        mapsUrl: "https://www.google.com/maps/place/Mix+Mateus+Santa+In%C3%AAs/@-3.662238,-45.3923246,17z/data=!4m8!1m2!2m1!1sSupermercados+Mateus+Mix+Sta+Ines+Santa+In%C3%AAs!3m4!1s0x92ca9c72919571eb:0x1e8d0348097b0470!8m2!3d-3.6594492!4d-45.395271",
        hasPopularTimes: true
    },
    {
        name: "Mateus Mix Bacuri",
        mapsUrl: "https://www.google.com/maps/place/Mix+Mateus+Bacuri/@-5.5427322,-47.4692356,17z/data=!3m1!4b1!4m5!3m4!1s0x92c55f1239efe88f:0x5d319269508a4206!8m2!3d-5.5427322!4d-47.4670469",
        hasPopularTimes: true
    },
    {
        name: "Mateus Mix Balsas",
        mapsUrl: "https://www.google.com/maps/place/Mix+Atacarejo+-+Balsas/@-7.5247502,-46.0428647,17z/data=!4m8!1m2!2m1!1sSupermercados+Mateus+Mix+Balsas+Balsas!3m4!1s0x92d5efa03b0e75c1:0x90347392f0f00c0a!8m2!3d-7.5228337!4d-46.0369077",
        hasPopularTimes: true
    },
    {
        name: "Mateus Mix Tamandare",
        mapsUrl: "https://www.google.com/maps/place/Mix+Mateus+Atacarejo+Rua+Tamandar%C3%A9/@-5.527439,-47.4748984,17z/data=!3m1!4b1!4m5!3m4!1s0x92c55fa0a25c8c37:0x548758661bcabb4!8m2!3d-5.527439!4d-47.4727097",
        hasPopularTimes: true
    },
    {
        name: "Mateus Mix João Paulo",
        mapsUrl: "https://www.google.com/maps/place/Mix+Mateus+Atacarejo+-+Jo%C3%A3o+Paulo/@-2.5488825,-44.2689569,17z/data=!3m1!4b1!4m5!3m4!1s0x7f68fea159820c3:0xb9a5fbbb87ff5ff4!8m2!3d-2.5488825!4d-44.2667682",
        hasPopularTimes: true
    },
    {
        name: "Mateus Pátio Norte",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Supermercados/@-2.5430602,-44.2100844,15z/data=!4m8!1m2!2m1!1sSupermercados+Mateus+P%C3%A1tio+Norte+S%C3%A3o+Jos%C3%A9+de+Ribamar!3m4!1s0x7f690e992d70053:0x350f2ccc3c6f9dd9!8m2!3d-2.5506775!4d-44.1922209",
        hasPopularTimes: true
    },
    {
        name: "Mateus Marambaia ",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Supermercados+Marambaia/@-1.4043294,-48.4508795,17z/data=!3m1!4b1!4m5!3m4!1s0x92a48bae0291f299:0x97fa02be08bb765d!8m2!3d-1.4043294!4d-48.4486908",
        hasPopularTimes: true
    },
    {
        name: "Mateus Mix Bacabal",
        mapsUrl: "https://www.google.com/maps/place/Mix+Mateus+Bacabal/@-4.2209182,-44.7862809,17z/data=!3m1!4b1!4m5!3m4!1s0x78a6f3536e08f23:0xc046c2510b93082b!8m2!3d-4.2209236!4d-44.7840922",
        hasPopularTimes: true
    },
    {
        name: "Mix Açailândia",
        mapsUrl: "https://www.google.com/maps/place/Mix+Atacarejo+A%C3%A7ail%C3%A2ndia/@-4.9501782,-47.5057696,14z/data=!4m8!1m2!2m1!1zU3VwZXJtZXJjYWRvcyBNaXggQcOnYWlsw6JuZGlhIEHDp2FpbMOibmRpYQ!3m4!1s0x92c5f52cb393c381:0x15466bbf5c6d9948!8m2!3d-4.9516479!4d-47.4737585",
        hasPopularTimes: true
    },
    {
        // NÃO TEM POPULAR TIMES -- https://www.google.com/maps/place/Mateus+Cohatrac+IV/@-2.5363602,-44.2090561,17z/data=!3m1!4b1!4m8!1m2!2m1!1sSupermercados+Mateus+Cohatrac+IV+S%C3%A3o+Lu%C3%ADs!3m4!1s0x7f69139a918c7cf:0x8377140a85eb5608!8m2!3d-2.5363656!4d-44.2068674
        name: "Mateus Cohatrac IV",
        mapsUrl: "",
        hasPopularTimes: false
    },
    {
        name: "Mix Marituba",
        mapsUrl: "https://www.google.com/maps/place/Mix+Atacarejo+Marituba/@-1.3660591,-48.3596163,17z/data=!3m1!4b1!4m5!3m4!1s0x92a45f7f3197a5a5:0x7d5ae475df2a276f!8m2!3d-1.3660645!4d-48.3574276",
        hasPopularTimes: true
    },
    {
        // NÃO TEM POPULAR TIMES -- URL: https://www.google.com/maps/place/Mateus/@-2.5426254,-44.2380498,14.25z/data=!4m8!1m2!2m1!1sSupermercados+Mateus+Super+Anil+S%C3%A3o+Lu%C3%ADs!3m4!1s0x0:0x7fb3577364dcaa!8m2!3d-2.5536524!4d-44.2471039}
        name: "Mateus Super Anil",
        mapsUrl: "",
        hasPopularTimes: false
    },
    {
        name: "Mix Parque dos Carajás",
        mapsUrl: "https://www.google.com/maps/place/Mix+Mateus/@-6.0912437,-49.8555919,17z/data=!3m1!4b1!4m5!3m4!1s0x92dd4fe2c76f9c07:0xa97e94aa6755e3cf!8m2!3d-6.091249!4d-49.8534032",
        hasPopularTimes: true
    },
    {
        // NÃO TEM POPULAR TIMES -- URL: https://www.google.com/maps/place/MIX+PEDREIRA/@-1.4159489,-48.4646414,17z/data=!4m8!1m2!2m1!1sSupermercados+Mix+Pedreira+Bel%C3%A9m++Bel%C3%A9m!3m4!1s0x92a48be726b2dfc5:0x7eb8d43dc4751514!8m2!3d-1.4153717!4d-48.4618128}
        name: "Mix Pedreira Belém ",
        mapsUrl: "",
        hasPopularTimes: false
    },
    {
        // NÃO TEM POPULAR TIMES -- URL: https://www.google.com/maps/place/Mix+Mateus+Atacarejo+Teresina/@-5.0767556,-42.7652403,15z/data=!4m8!1m2!2m1!1sSupermercados+Mix+Teresina+Novafapi+Teresina!3m4!1s0x78e3b431582c6ad:0x2b2a8bd8fe20bcd!8m2!3d-5.0626276!4d-42.7639425}
        name: "Mix Teresina Novafapi",
        mapsUrl: "",
        hasPopularTimes: false
    },
    {
        name: "Mix Nova Carajás",
        mapsUrl: "https://www.google.com/maps/place/Mix+Mateus/@-6.0912437,-49.8555919,17z/data=!3m1!4b1!4m5!3m4!1s0x92dd4fe2c76f9c07:0xa97e94aa6755e3cf!8m2!3d-6.091249!4d-49.8534032",
        hasPopularTimes: true
    },
    {
        name: "Mateus Castanhal",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Supermercados+%26+Eletro/@-1.2966428,-47.911551,17z/data=!3m1!4b1!4m5!3m4!1s0x92a5a5e456350b51:0x36b8fd6685dee2a4!8m2!3d-1.2966482!4d-47.9093623",
        hasPopularTimes: true
    },
    {
        name: "Mateus Maguari",
        mapsUrl: "https://www.google.com/maps/place/Supermercado+MATEUS+MAGUARI/@-1.3642132,-48.3762222,17z/data=!3m1!4b1!4m5!3m4!1s0x92a45f8e7fe38945:0x7f373db837ebc720!8m2!3d-1.3642186!4d-48.3740335",
        hasPopularTimes: true
    },
    {
        name: "Mix Castanhal",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Supermercados+%26+Eletro/@-1.2974016,-47.9250358,15z/data=!4m8!1m2!2m1!1sSupermercados+Mix+Castanhal+Castanhal!3m4!1s0x0:0x36b8fd6685dee2a4!8m2!3d-1.2966489!4d-47.9093626",
        hasPopularTimes: true
    },
    {
        name: "Mateus Acailândia",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Supermercados/@-4.9491294,-47.5010955,17z/data=!3m1!4b1!4m5!3m4!1s0x92c5f5abe1d8ef43:0xede602d0d981989d!8m2!3d-4.9491347!4d-47.4989068",
        hasPopularTimes: true
    },
    {
        name: "Mateus Mix Maiobão ",
        mapsUrl: "https://www.google.com/maps/place/Mix+Atacarejo+Maiob%C3%A3o/@-2.5527817,-44.1795702,17z/data=!3m1!4b1!4m5!3m4!1s0x7f690c942fe6e7b:0x78e75b85ced1a807!8m2!3d-2.5527871!4d-44.1773815",
        hasPopularTimes: true
    },
    {
        name: "Mateus Mix Pinheiro",
        mapsUrl: "https://www.google.com/maps/place/Mix+Pinheiro/@-2.5638421,-44.2721776,14.75z/data=!4m8!1m2!2m1!1sSupermercados+Mateussupermercado+mateus+pinheiro+Cohatrac+IV+S%C3%A3o+Lu%C3%ADs!3m4!1s0x7f68ff5cc78ff8f:0x6e2b60af28b5213c!8m2!3d-2.5645392!4d-44.2629074",
        hasPopularTimes: true
    },
    {
        name: "Mateus Marabá",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Supermercados/@-5.3626251,-49.1399418,14z/data=!4m8!1m2!2m1!1sSupermercados+Mateus+Marab%C3%A1+Marab%C3%A1!3m4!1s0x92c309e4c4edfdff:0x5ced66e1986f57d5!8m2!3d-5.3517223!4d-49.1115374",
        hasPopularTimes: true
    },
    {
        name: "Mateus Jaderlândia",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Supermercados+-+Jaderl%C3%A2ndia/@-1.3901975,-48.4277225,17z/data=!3m1!4b1!4m5!3m4!1s0x92a48aeefb3ffebb:0xde047ebb6cd51ccc!8m2!3d-1.3902029!4d-48.4255338",
        hasPopularTimes: true
    },
    {
        name: "Mix Marabá",
        mapsUrl: "https://www.google.com/maps/place/Mix+Mateus/@-5.3626251,-49.1399418,14z/data=!4m8!1m2!2m1!1sSupermercados+Mateus+Marab%C3%A1+Marab%C3%A1!3m4!1s0x92c3a759b433f6ff:0xac06fbe81f885f81!8m2!3d-5.3736139!4d-49.133327",
        hasPopularTimes: true
    },
    {
        name: "Mix Altamira",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Hipermercado+S.A./@-3.2096094,-52.2838924,13z/data=!4m8!1m2!2m1!1sSupermercados+Mix+Mateus+Altamira!3m4!1s0x0:0x7c5fe5d95eaa1e0a!8m2!3d-3.2025838!4d-52.2563088",
        hasPopularTimes: true
    },
    {
        name: "Mix Abaetetuba",
        mapsUrl: "https://www.google.com/maps/place/Mix+Mateus+Abaetetuba/@-1.7411373,-48.8567386,17z/data=!3m1!4b1!4m5!3m4!1s0x92a351b6399cec5f:0x322ab94284db13a4!8m2!3d-1.7411427!4d-48.8545499",
        hasPopularTimes: true
    },
    {
        name: "Mateus Cohama",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Supermercados+Cohama/@-2.5212335,-44.2542428,16z/data=!4m8!1m2!2m1!1smateus+supermercado+cohama!3m4!1s0x7f691fd29a443ad:0x547b6863f419061d!8m2!3d-2.5157923!4d-44.2452414",
        hasPopularTimes: true
    },
    {
        name: "Mateus Cohatrac",
        mapsUrl: "https://www.google.com/maps/place/Mateus+Supermercados+Cohatrac/@-2.5426863,-44.2066481,17z/data=!3m1!4b1!4m5!3m4!1s0x7f690fc237da251:0xe17c1b910b2568b6!8m2!3d-2.5426917!4d-44.2044594",
        hasPopularTimes: true
    },
]

async function run(times = 1, storeIndex = -1) {

    console.time('mainLoop')

    const mainBrowser = await NavigationService.openBrowser()
    const browser = await NavigationService.openBrowserContext(mainBrowser)

    const storesToProcess = storeIndex < 0 ? storesMateus : [storesMateus[storeIndex]]

    for (var i = 0; i < times; i++) {
        await PlaceTimesRobotService.work(storesToProcess, browser)
    }

    await PlaceTimesRobotService.sleep(1000)
    await NavigationService.closeBrowser(mainBrowser)

    console.timeEnd('mainLoop')

}


if(process.env.NODE_ENV == "production") {
    console.log('NODE_ENV', process.env.NODE_ENV)
    console.log('args', process.argv)
    const times = process.argv && process.argv[2] ? parseInt(process.argv[2]) : 1
    const storeIndex = process.argv && process.argv[3] ? parseInt(process.argv[3]) : -1

    run(times, storeIndex)
}else {
    const times = 10
    const storeIndex = -1
    run(times, storeIndex)
}
