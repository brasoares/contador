"use client";

import GraficoPizza from "@/app/(main)/porlocal/porLocal-components/graficoPizza";
import GraficoBarras from "@/app/(main)/visaogeral/visaoGeral-components/graficoBarras";

export default function PorLocal() {
  return (
    <div className="relative z-7 mt-14 w-full pt-4 pl-80 pr-[60px]">
      <div className="grid grid-cols-5 gap-16">
        <GraficoPizza
          nome={"Térreo - Entrada"}
          imagem={"/graficos/pizza_local_1.png"}
        ></GraficoPizza>
        <GraficoPizza
          nome={"Primeiro Andar"}
          imagem={"/graficos/pizza_local_1.png"}
        ></GraficoPizza>
        <GraficoPizza
          nome={"Segundo Andar"}
          imagem={"/graficos/pizza_local_1.png"}
        ></GraficoPizza>
        <GraficoPizza
          nome={"Terceiro Andar"}
          imagem={"/graficos/pizza_local_1.png"}
        ></GraficoPizza>
        <GraficoPizza
          nome={"Quarto Andar"}
          imagem={"/graficos/pizza_local_1.png"}
        ></GraficoPizza>
      </div>
      <div className="mt-12">
        <GraficoBarras
          nome={"Série Temporal"}
          imagem={"/graficos/serie_temporal_local.png"}
        ></GraficoBarras>
      </div>
    </div>
  );
}
