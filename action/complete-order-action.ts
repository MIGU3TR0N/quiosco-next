"use server";
import { prisma } from "@/src/lib/prisma";
import { OrderIdSchema } from "@/src/schema";
import { revalidatePath } from "next/cache";
export async function completeOrder(formData: FormData) {
  const data = {
    orderId: formData.get("order_id"),
  };

  const result = OrderIdSchema.safeParse(data);

  if (result.success) {
    try {
      await prisma.order.update({
        where: {
          id: result.data.orderId,
        },
        data: {
          status: true,
          orderReadyAt: new Date(Date.now()),
        },
      });
      revalidatePath("/admin/orders");
      return { success: true, message: "Pedido Completado Correctamente" };
    } catch (error) {
      console.log(error);
      return { success: false, message: "Error al completar el pedido" };
    }
  } else {
    return { success: false, message: "Datos inválidos" };
  }
}
