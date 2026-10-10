import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify"
import {CreateCustomerController} from './controllers/CreateCustomerController.js'
import {ListCustomerController} from "./controllers/ListCustomerController.js"
import {DelCustomerController} from "./controllers/DeleteCustomerController.js"


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/test', async(request: FastifyRequest, reply:FastifyReply) => {
        return{ok: true}
    })

    fastify.post("/customer", async(request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply)
    })

    fastify.get("/customersList", async(request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomerController().handle(request, reply)
    })
    fastify.delete("/delCustomer", async(request: FastifyRequest, reply: FastifyReply) => {
        return new DelCustomerController().handle(request, reply)
    })
}