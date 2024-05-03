-- CreateTable
CREATE TABLE "RegFormDetails" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "currenSalary" INTEGER NOT NULL,
    "expectedSalary" INTEGER NOT NULL,
    "workExperience" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "PhoneNumber" INTEGER NOT NULL,

    CONSTRAINT "RegFormDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RegFormDetails_id_key" ON "RegFormDetails"("id");
