
export interface DataColumnConfig {
    title?: string; //texto do cabeçalho da coluna na tabela
    indexOrder?: number // indica que posição está a coluna na tabela caso não tenha um título
    innerCellSelector?: string; // elemento html dentro da tag 'td' que contem o texto da celula na tabela
    cellProcessorFunction?: Function // função que processa os dados de dentroda célula. Chamado quando for atribuido
    propName?:string; // indica como sera nomeado a propriedade do objet. Caso não seja informada o título será usado pra isso 
    dataParser?: Function; // função para formatar o dado recuperado da tabela como string
}

export interface Store {
    name: string;
    mapsUrl?: string;
    hasPopularTimes: boolean
}

export interface StorePopularTimes {
    store: Store,
    popularTimes: Array<PopularTime>
}

export interface PopularTime {
    date: Date,
    time: string,
    value: number
}