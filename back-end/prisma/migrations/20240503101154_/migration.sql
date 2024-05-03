/*
  Warnings:

  - You are about to drop the `RegFormDetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "RegFormDetails";

-- CreateTable
CREATE TABLE "Regformdetails" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "currenSalary" INTEGER NOT NULL,
    "expectedSalary" INTEGER NOT NULL,
    "workExperience" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "PhoneNumber" INTEGER NOT NULL,

    CONSTRAINT "Regformdetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Regformdetails_id_key" ON "Regformdetails"("id");
