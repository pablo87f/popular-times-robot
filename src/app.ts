

import sampleStores from "./sample.stores";
import { PlaceTimesRobotService, NavigationService } from "./services";


async function run(times = 1, storeIndex = -1) {

    console.time('mainLoop')

    const mainBrowser = await NavigationService.openBrowser()
    const browser = await NavigationService.openBrowserContext(mainBrowser)

    const storesToProcess = storeIndex < 0 ? sampleStores : [sampleStores[storeIndex]]

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
    const times = 1
    const storeIndex = 1
    run(times, storeIndex)
}
