/*
  Warnings:

  - You are about to drop the column `date` on the `Order` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `OrderProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "date",
ADD COLUMN     "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "OrderProducts" ADD COLUMN     "quantity" INTEGER NOT NULL;
