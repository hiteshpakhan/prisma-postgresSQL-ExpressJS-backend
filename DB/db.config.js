import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    // ... you will write your Prisma Client queries here
    log: ["query"],
}) 

export default prisma;