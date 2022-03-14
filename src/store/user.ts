import { defineStore } from 'pinia'

interface userHandleTs {
    userName: String;
}

export const userHandleStore = defineStore('userHandle', {
    state: (): userHandleTs => ({
        userName: 'wpl'
    }),
    actions: {
        setUserName(name: String) {
            this.userName = name
        }
    }
})