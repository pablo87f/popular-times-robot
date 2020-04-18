import puppeteer, { Page, BrowserContext } from "puppeteer";
import { NavigationService } from "./navigation.service";
import { Store, StorePopularTimes, PopularTime } from "../types";

export const PlaceTimesRobotService = {


    sleep(milliseconds: number) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    },

    parsePopularTime(stringData: string): PopularTime {

        const parts = stringData.split(" ") // Formato: "Movimento às 02:00: 10%."
        const date = new Date()
        const time = parts[2].slice(0, parts[2].length - 1) // 02:00
        const value = parseInt(parts[3].slice(0, parts[3].length - 2), 10) // 10

        return {
            date: date,
            time: time,
            value: value
        }
    },

    async openStorePage(store: Store, browser: BrowserContext): Promise<Page | undefined> {

        if (store.hasPopularTimes && store.mapsUrl) {
            const storePage = await NavigationService.openNewPage(browser)

            await storePage.goto(store.mapsUrl)
            await this.sleep(5000)

            return storePage
        }
        return undefined

    },
    async refreshStorePage(store: Store) {

    },

    async getStorePopularTimes(store: Store, browser: BrowserContext): Promise<Array<string>> {

        try {
            const storePage = await this.openStorePage(store, browser)

            if (storePage) {
                const popularTimesData = await NavigationService.getAttribFromElements(".section-popular-times-bar",
                    "aria-label", storePage)

                storePage.close()
                return popularTimesData

            }
            return []
        }
        catch (ex) {
            console.warn('ERRO LOJA:' + store.name, ex.message)
            return []
        }
    },

    async processStorePopularTimesData(store: Store, data: Array<string>): Promise<StorePopularTimes> {
        const popularTimes = data.map(strData => this.parsePopularTime(strData))
        return { store: store, popularTimes: popularTimes }
    },

    async work(stores: Array<Store>, browser: BrowserContext) {

        // console.log('> Start Robot:', nomeFilial)
        console.warn('Total Lojas:', stores.length)

        try {

            let totalSuccess = 0
            let totalFails = 0

            let storesPopuparTimes: Array<StorePopularTimes> = []

            for (let store of stores) {

                const storePopularTimesData = await this.getStorePopularTimes(store, browser)

                const storePopularTimes = await this.processStorePopularTimesData(store, storePopularTimesData)

                const realDone: Boolean = storePopularTimes.popularTimes.length > 0

                realDone ? totalSuccess++ : totalFails++

                console.warn("=>", new Date().toISOString(), ' | ', `${realDone}`.padEnd(5, ' '), ' | ', storePopularTimes.store.name)

                storesPopuparTimes.push(storePopularTimes)
            }

            console.warn("---------------------------------")
            console.warn('Total lojas sucesso:', totalSuccess)
            console.warn('Total lojas falha:', totalFails)
        }
        catch (e) {
            console.warn('ERRO:', e.message)
        }
    }
}