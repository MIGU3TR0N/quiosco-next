import { useState } from "react";
import { toast } from "react-toastify";
import { completeOrder } from "@/actions/complete-order-action";
import { OrderWithProducts } from "@/src/types";
import { formatCurrency } from "@/src/utils";

type OrdeCardProps = {
  order: OrderWithProducts;
};
export default function OrderCard({ order }: OrdeCardProps) {
  const [isCompleting, setIsCompleting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsCompleting(true);

    const formData = new FormData(event.currentTarget);
    const response = await completeOrder(formData);

    setIsCompleting(false);

    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6  lg:mt-0 lg:p-8 space-y-4"
    >
      <p className="text-2xl font-medium text-gray-900">
        Cliente: {order.name}
      </p>
      <p className="text-lg font-medium text-gray-900">Productos Ordenados: </p>
      <dl className="mt-6 space-y-4">
        {order.orderProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-2 border-t border-gray-200 pt-4"
          >
            <dt className="fex items-center text-sm text-gray-600">
              <span>
                ({product.quantity}) {""}
              </span>
            </dt>
            <dd className="text-sm font-medium text-green-900">
              {product.product.name}
            </dd>
          </div>
        ))}
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-900">
            Total a Pagar:
          </dt>
          <dd className="text-base font-medium text-gray-900">
            {formatCurrency(order.total)}
          </dd>
        </div>
      </dl>

      <form onSubmit={handleSubmit}>
        <input type="hidden" value={order.id} name="order_id" />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          disabled={isCompleting}
        >
          {isCompleting ? "Completando..." : "Marcar Orden Completada"}
        </button>
      </form>
    </section>
  );
}
