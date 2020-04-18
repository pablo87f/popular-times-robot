import puppeteer, { ElementHandle, Page, Browser, BrowserContext, Viewport } from "puppeteer";
import { DataColumnConfig } from "./types";

export const NavigationService = {

    async openBrowser(visible = false) {
        const mainBrowser = await puppeteer.launch({ headless: !visible, ignoreHTTPSErrors: true })
        return mainBrowser
    },

    async openBrowserContext(mainBrowser: Browser) {
        const browser = await mainBrowser.createIncognitoBrowserContext()
        return browser
    },

    async openNewPage(browser: BrowserContext, viewport: Viewport = { width: 1366, height: 768 }) {
        const page = await browser.newPage()
        await page.setViewport(viewport);
        return page
    },

    async closeBrowser(mainBrowser: Browser) {
        if (mainBrowser) {
            await mainBrowser.close()
        }
    },

    async searchOnGoogle(searchText: string, page: Page): Promise<Page> {
        await page.goto('https://www.google.com.br/')
        await page.type('input[name=q]', `${searchText} ${String.fromCharCode(13)}`, { delay: 20 })
        await page.waitFor('.TbwUpd')
        return page
    },

    async accessSearchResultByIndex(resultIndex: number, page: Page): Promise<Page> {
        const searchResults = await page.$$('.r')
        if (searchResults.length < 1) throw new Error('Pagina de busca sem nenhum resultado encontrado para a busca')
        await searchResults[resultIndex].click()
        return page
    },

    async clickOnGoogleTabByTitle(tabTitle: string, page: Page) {

        const tabs = await page.$$('.hdtb-mitem')
        if (!tabs || tabs.length < 1) throw new Error('Nenhuma aba de estatística foram encontradas no site')

        let tab: puppeteer.ElementHandle | undefined = undefined

        for (let t of tabs) {
            const tabText = await (await t.getProperty('textContent')).jsonValue()
            const adjustedTabText: string = `${tabText}`.trim()
            if (adjustedTabText === tabTitle) {
                tab = t
                break;
            }
        }

        if (!tab) throw new Error(`Aba com o título '${tabTitle}' não foi encontrada`)
        await tab.click()
        return page
    },

    async getAttribFromElements(selector: string, attribute: string = "aria-label", page: Page): Promise<Array<string>> {
        
        const elements = await page.$$(selector)
        
        if (!elements || elements.length < 1) throw new Error('Nenhuma elemento foi encontrado no site')

        let data = []
        for (let e of elements) {
            const elementText = await e.evaluate(el => el.getAttribute("aria-label"));
            if (elementText) { data.push(elementText) }
        }
        return data
    },

    async getSearchResultByIndex(resultIndex: number, page: Page): Promise<ElementHandle> {
        const searchResults = await page.$$('.r')
        if (searchResults.length < 1) throw new Error('Pagina de busca sem nenhum resultado encontrado para a busca')
        return searchResults[resultIndex]
    },

    async getSearchResultLink(searchResult: ElementHandle): Promise<string> {
        const links = await searchResult.$$('a')
        if (links.length < 1) throw new Error('Link não encontrado para o resultado da pesquisa passado')
        const url = await (await links[0].getProperty('href')).jsonValue()
        return `${url}`
    },

    async getSearchResultTitle(searchResult: ElementHandle): Promise<string> {
        const titles = await searchResult.$$('h3')
        if (titles.length < 1) throw new Error('Título não encontrado para o resultado da pesquisa passado')
        const titleText = await (await titles[0].getProperty('textContent')).jsonValue()
        return `${titleText}`
    },

    async selectFilterValue(selectId: string, value: string, page: Page): Promise<Page> {
        await page.waitFor(`#${selectId}`, { timeout: 5000 })
        await page.select(`#${selectId}`, value)
        return page
    },

    async getTableDataByColumns(tableContainerId: string, columnsTitle: Array<string>, page: Page) {

        await page.waitFor(`#${tableContainerId}`, { timeout: 5000 })
        const tableContainersResults = await page.$$(`#${tableContainerId}`)
        if (!tableContainersResults || tableContainersResults.length < 1) throw new Error(`Nenhuma container com o ID "${tableContainerId}" foi encontrado no site`)

        const tableContainer = tableContainersResults[0]
        const tablesResult = await tableContainer.$$('table')
        if (!tablesResult || tablesResult.length < 1) throw new Error(`Nenhuma tabela foi encontrada no container como ID "${tableContainerId}"`)

        const table = tablesResult[0]
        const titleResults = await table.$$('th')
        if (!titleResults || titleResults.length < 1) throw new Error(`Nenhum título para a tabela foi encontrado para o container como ID "${tableContainerId}"`)

        let mapColumnsTitleIndex: any = {}

        for (const [index, title] of titleResults.entries()) {
            try {
                const titleText = await (await title.getProperty('textContent')).jsonValue()
                const adjustedTitleText: string = `${titleText}`.trim()
                mapColumnsTitleIndex = { ...mapColumnsTitleIndex, [adjustedTitleText]: index }
            } catch (e) {
                console.warn('ERRO AO TENTAR LER TEXTO DA CELULA:', e.message)
            }
        }

        const tableRows = await tableContainer.$$('tr')
        if (!tableRows || tableRows.length < 1) throw new Error(`Nenhuma linha foi encontrada na tabela para o container como ID "${tableContainerId}"`)

        let tableData: Array<any> = []

        for (const tableRow of tableRows) {
            const tableCells = await tableRow.$$('td')

            if (tableCells && tableCells.length > 0) {

                let rowData: any = {}

                for (const title of columnsTitle) {
                    const columnIndex = mapColumnsTitleIndex[title]
                    try {

                        const cellText = await (await tableCells[columnIndex].getProperty('textContent')).jsonValue()
                        const adjustedCellText: string = `${cellText}`.trim()
                        rowData = { ...rowData, [title]: adjustedCellText }
                    } catch (e) {
                        console.warn('title', title, 'columnIndex', columnIndex, 'erro', e)
                    }
                }

                tableData.push(rowData)
            }
        }

        return tableData

    },

    async getTableDataByColumnsConfig(tableContainerId: string, dataColumnsConfigs: Array<DataColumnConfig>, page: Page) {

        await page.waitFor(`#${tableContainerId}`, { timeout: 5000 })
        const tableContainersResults = await page.$$(`#${tableContainerId}`)
        if (!tableContainersResults || tableContainersResults.length < 1) throw new Error(`Nenhuma container com o ID "${tableContainerId}" foi encontrado no site`)

        const tableContainer = tableContainersResults[0]
        const tablesResult = await tableContainer.$$('table')
        if (!tablesResult || tablesResult.length < 1) throw new Error(`Nenhuma tabela foi encontrada no container como ID "${tableContainerId}"`)

        const table = tablesResult[0]
        const titleResults = await table.$$('th')
        if (!titleResults || titleResults.length < 1) throw new Error(`Nenhum título para a tabela foi encontrado para o container como ID "${tableContainerId}"`)

        let mapColumnsTitleIndex: any = {}

        for (const [index, title] of titleResults.entries()) {
            try {
                const titleText = await (await title.getProperty('textContent')).jsonValue()
                const adjustedTitleText: string = `${titleText}`.trim()
                mapColumnsTitleIndex = { ...mapColumnsTitleIndex, [adjustedTitleText]: index }
            } catch (e) {
                console.warn('ERRO AO TENTAR LER TEXTO DA CELULA:', e.message)
            }
        }

        const tableRows = await tableContainer.$$('tr')
        if (!tableRows || tableRows.length < 1) throw new Error(`Nenhuma linha foi encontrada na tabela para o container como ID "${tableContainerId}"`)

        let tableData: Array<any> = []

        for (const tableRow of tableRows) {
            const tableCells = await tableRow.$$('td')

            if (tableCells && tableCells.length > 0) {

                let rowData: any = {}

                for (const [indexConfig, dataColumnCofig] of dataColumnsConfigs.entries()) {
                    const columnIndex = dataColumnCofig.title ? mapColumnsTitleIndex[dataColumnCofig.title] : dataColumnCofig.indexOrder
                    const propName = dataColumnCofig.propName != undefined ? dataColumnCofig.propName : (dataColumnCofig.title ? dataColumnCofig.title : `columnConfig${indexConfig}`)
                    try {
                        const tableCell = tableCells[columnIndex]


                        // caso passe uma função pra processar o texto por ter elementos mais complexos dentro da célula
                        if (dataColumnCofig.cellProcessorFunction) {
                            const processedCellText = await dataColumnCofig.cellProcessorFunction(tableCell)
                            rowData = { ...rowData, [propName]: dataColumnCofig.dataParser ? dataColumnCofig.dataParser(processedCellText) : processedCellText }
                        }
                        // jeito mais convencional de buscar dados dentro da celula
                        else {
                            const dataCellContainer = dataColumnCofig.innerCellSelector ? (await tableCell.$$(dataColumnCofig.innerCellSelector))[0] : tableCell
                            const cellText = await (await dataCellContainer.getProperty('textContent')).jsonValue()
                            const adjustedCellText: string = `${cellText}`.trim()
                            rowData = { ...rowData, [propName]: dataColumnCofig.dataParser ? dataColumnCofig.dataParser(adjustedCellText) : adjustedCellText }
                        }

                    } catch (e) {
                        console.warn('title', dataColumnCofig.title, 'columnIndex', columnIndex, 'erro', e)
                    }
                }

                tableData.push(rowData)
            }
        }

        return tableData

    },

}