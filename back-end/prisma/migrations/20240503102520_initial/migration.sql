/*
  Warnings:

  - You are about to drop the column `currenSalary` on the `Regformdetails` table. All the data in the column will be lost.
  - Added the required column `currentSalary` to the `Regformdetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Regformdetails" DROP COLUMN "currenSalary",
ADD COLUMN     "currentSalary" INTEGER NOT NULL;
