import Fastify from 'Fastify';
import { routes } from './routes.js';
import cors from '@fastify/cors';

const app = Fastify({ logger: true })

// Inicializa a API
const startFastify = async()=>{

    await app.register(cors);
    await app.register(routes); // Carrega as rotas da API

    try{
        await app.listen({
            port: 7938
        })
    }catch(err){
        process.exit(1)
    }
}

startFastify();