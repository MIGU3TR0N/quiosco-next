"use client";
import LatestOrderItem from "@/components/order/LatestOrderItem";
import Logo from "@/components/ui/Logo";
import { OrderWithProducts } from "@/src/types";
import { FiLoader } from "react-icons/fi";
import useSWR from "swr";

export default function OrdersPage() {
  const url = "/orders/api";
  const fetcher = () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: false,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FiLoader className="animate-spin text-4xl text-blue-950" />
        <span className="ml-2 text-lg font-semibold text-blue-950">
          Cargando...
        </span>
      </div>
    );
  }
  if (data)
    return (
      <>
        <h1 className="text-center mt-16 text-6xl font-black">
          Ordenes Listas
        </h1>
        <Logo />

        {data.length ? (
          <div className="grid  grid-cols-2 gap-5 max-w-5xl mx-auto mt-10">
            {data.map((order) => (
              <LatestOrderItem key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <p className="text-center my-10">No Hay Ordenes Listas</p>
        )}
      </>
    );
}
