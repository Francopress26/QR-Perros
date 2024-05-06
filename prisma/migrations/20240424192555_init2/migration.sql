/*
  Warnings:

  - You are about to drop the column `enfermedades` on the `Mascota` table. All the data in the column will be lost.
  - You are about to drop the column `medicamentos` on the `Mascota` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Mascota" DROP COLUMN "enfermedades",
DROP COLUMN "medicamentos",
ADD COLUMN     "contacto" TEXT,
ADD COLUMN     "imageURL" TEXT;
