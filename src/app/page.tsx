import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, Percent, User } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-col-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className=" text-lg sm:text-xl text-gray-800 select-none">
                Total de vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>Total de vendas em 90 dias</CardDescription>

            <CardContent>
              <p className="text-base sm:text-lg font-bold"> R$ 40.000</p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className=" text-lg sm:text-xl text-gray-800 select-none">
                Novos clientes
              </CardTitle>
              <User className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>Novos clientes em 90 dias</CardDescription>

            <CardContent>
              <p className="text-base sm:text-lg font-bold"> 415 </p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className=" text-lg sm:text-xl text-gray-800 select-none">
                Pedidos hoje
              </CardTitle>
              <Percent className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>Total de pedidos hoje</CardDescription>

            <CardContent>
              <p className="text-base sm:text-lg font-bold"> 159 </p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className=" text-lg sm:text-xl text-gray-800 select-none">
                Pedidos hoje
              </CardTitle>
              <Percent className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>Total de pedidos hoje</CardDescription>

            <CardContent>
              <p className="text-base sm:text-lg font-bold"> 159 </p>
            </CardContent>
          </CardHeader>
        </Card>
      </section>
    </main>
  );
}
