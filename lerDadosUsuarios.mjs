import { writeFile, readFile } from "node:fs"

export let usuarios

export const lerDadosUsuarios = (callback) => {
    readFile("./usuarios.json", "utf-8", (err, data) => {
        if (err) {
            callback(err)
        }

        try {
            usuarios = JSON.parse(data)
            callback(null, usuarios)
        } catch (error) {
            callback(error)
        }
    })
}