-- CreateTable
CREATE TABLE "Mascota" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "raza" TEXT,
    "fecha_nacimiento" TEXT,
    "datos_extra" TEXT,
    "enfermedades" TEXT,
    "medicamentos" TEXT,
    "codigoQR" TEXT,

    CONSTRAINT "Mascota_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mascota_codigoQR_key" ON "Mascota"("codigoQR");
