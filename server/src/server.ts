/*
type Usuario = {
    idade : number
}

function mostraIdadeUsuario(usuario : Usuario){
    return usuario.idade
}

const usuario = {
    name : "Diego",
    idade : 38

}

mostraIdadeUsuario(usuario)
console.log(mostraIdadeUsuario(usuario));

const usuario2 = {
    name : "Rock",
    idade : 35
}

console.log(mostraIdadeUsuario(usuario2));
*/
import Fastify from "fastify"
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/',() => {
    return 'Hello World'
}) 

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title:{
                startsWith: 'Beber'
            }
        }
    })

    return habits
}) 


app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running!, port:3333');
})

