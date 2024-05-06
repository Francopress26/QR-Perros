/*
  Warnings:

  - You are about to drop the column `fecha_nacimiento` on the `Mascota` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Mascota" DROP COLUMN "fecha_nacimiento",
ADD COLUMN     "email_contacto" TEXT,
ADD COLUMN     "zona" TEXT;
