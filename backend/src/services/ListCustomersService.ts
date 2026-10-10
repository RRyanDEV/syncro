import prismaClient from "../prisma";

// Busca todos os clientes do Banco

class ListCustomersService{
    async execute(){
        const customers = await prismaClient.customer.findMany()

        return customers;
    }
}

export { ListCustomersService }