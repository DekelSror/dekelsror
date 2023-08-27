import { writable } from "svelte/store";
import { backendTechnologies, frontendTechnologies, languages, tools } from "./content";

export const shuffle = <T>(arr: T[] | Array<T>) => {
    let s = arr.slice()

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        
        const tmp = s[i]
        s[i] = s[j]
        s[j] = tmp
    }
    
    return s
}

export const allTools = [...frontendTechnologies, ...backendTechnologies, ...tools, ...languages]

export const toolsFilterStore = writable(
    allTools.map(t => t.name)
)

// export const resetToolsStore = () => {
//     toolsFilterStore.set(shuffle(allTools.map(tool => ({name: tool.name, highlighted: false}))))
// }



