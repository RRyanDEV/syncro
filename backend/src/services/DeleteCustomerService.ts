import prismaClient from "../prisma"

interface DelCustomerProps{
    id: string
}

// Deleta um usuário do Banco

class DeleteCustomerService {
    async execute({id}: DelCustomerProps){
        if(!id){
            throw new Error("Solicitação Inválida")
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        })

        if(!findCustomer){
            throw new Error("Usuário não Existe!")
        }

        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
        })

        return { message: "Deletado com sucesso!" }
    }
}

export { DeleteCustomerService }