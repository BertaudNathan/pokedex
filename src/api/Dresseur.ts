/*//import { PrismaClient } from '@prisma/client'; // Ensure Prisma Client is installed and generated

const prisma; //= new PrismaClient();

// Create a new Dresseur
export const createDresseur = async (data: { name: string; age: number }) => {
    return await prisma.dresseur.create({
        data,
    });
};

// Read all Dresseurs
export const getAllDresseurs = async () => {
    return await prisma.dresseur.findMany();
};

// Read a single Dresseur by ID
export const getDresseurById = async (id: number) => {
    return await prisma.dresseur.findUnique({
        where: { id },
    });
};

// Update a Dresseur by ID
export const updateDresseur = async (id: number, data: { name?: string; age?: number }) => {
    return await prisma.dresseur.update({
        where: { id },
        data,
    });
};

// Delete a Dresseur by ID
export const deleteDresseur = async (id: number) => {
    return await prisma.dresseur.delete({
        where: { id },
    });
};*/