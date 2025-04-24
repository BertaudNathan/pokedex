-- CreateTable
CREATE TABLE "Dresseur" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "password" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Pokemon" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "type" TEXT,
    "level" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "dresseurId" TEXT,
    CONSTRAINT "Pokemon_dresseurId_fkey" FOREIGN KEY ("dresseurId") REFERENCES "Dresseur" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
