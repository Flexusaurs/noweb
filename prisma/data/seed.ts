import { PrismaClient } from "@prisma/client";
import categories from "./categories";

const prisma = new PrismaClient();

async function main(){
    await prisma.category.createMany({
        data: categories.map((category) => ({name: category})),
    });
}

main()
.then(async() => {
    await prisma.$disconnect()
})
.catch(async ()=>{
    await prisma.$disconnect();
    process.exit(1)
})