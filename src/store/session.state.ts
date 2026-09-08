import { atom, createStore } from "jotai";

export const store = createStore()

const sessionState = atom({
    token: null,
    role: null,
    id: null
})

export default sessionState