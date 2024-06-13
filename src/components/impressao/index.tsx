import { forwardRef } from "react";
import { FormDataProps } from "../Form";
import { Label } from "../ui/label";
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const ComponenteImpressao = forwardRef<HTMLDivElement, FormDataProps>((data, ref) => {
  const date = new Date()
  const dataFormat = format(date, "dd 'de' MMMM 'de' yyyy 'às' HH:mm", { locale: ptBR })

  return (
    <div ref={ref} className="max-w-2xl h-[270mm] mt-12 mx-auto px-6 pt-6 pb-1 space-y-12 flex flex-col items-center border-double border-4 border-black">
      <header className="w-full flex flex-col mb-2 items-center space-y-4">
        <img src="https://inscricoes.pro.br/wp-content/uploads/cdhu-610x241.jpg" width={128} alt="" />
        <div className="w-full flex flex-col items-center justify-center space-y-2">
          <h1 className="text-xl uppercase font-bold">FORMULÁRIO DE CONTROLE DE PATRIMÔNIO</h1>
          <p className="uppercase  text-xs text-foreground">
            2.11.04.00 – GER DE GESTÃO ESTRATEGICA DE DADOS E ENG PROC
          </p>
        </div>
      </header>
      <div className="w-full h-full flex flex-col justify-between">
        <div className="w-full space-y-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col items-start">
              <Label className="uppercase ">Nome do colaborador</Label>
              <p className="capitalize">{data.employeeName}</p>
            </div>
            <div className="flex flex-col items-end">
              <Label className="uppercase ">Nome do gestor</Label>
              <p className="capitalize">{data.managerName}</p>
            </div>
          </div>

          <div className="w-full">
            <Label className="uppercase ">Centro de custo</Label>
            <p className="lowercase">{data.costCenter}</p>
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col items-start justify-center">
              <Label className="uppercase ">Localidade</Label>
              <p className="capitalize">{data.location}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Label className="uppercase ">Andar</Label>
              <p className="uppercase">{data.floor}</p>
            </div>

            <div className="flex flex-col items-end justify-center">
              <Label className="uppercase ">Complemento</Label>
              <p className="capitalize">{data.complement}</p>
            </div>
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col items-start justify-center">
              <Label className="uppercase ">Tipo do ativo</Label>
              <p className="capitalize">{data.assetType}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Label className="uppercase ">bc/sn</Label>
              <p className="uppercase">{data.assetBP}</p>
            </div>
            <div className="flex flex-col items-end justify-center">
              <Label className="uppercase ">Marca do ativo</Label>
              <p className="capitalize">{data.assetBrand}</p>
            </div>
          </div>

          <div className="w-full">
            <Label className="uppercase">DESCRIÇÃO DO MODELO</Label>
            <p className="lowercase">{data.description}</p>
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start">
              <Label className="uppercase ">Acessórios?</Label>
              <p className="capitalize">{data.hasAccessory}</p>
            </div>

            <div className="flex flex-col items-center">
              <Label className="uppercase ">Status</Label>
              <p className="capitalize">{data.status}</p>
            </div>

            <div className="flex flex-col items-center">
              <Label className="uppercase ">Faltou itens?</Label>
              <p className="capitalize">{data.hasItens}</p>
            </div>
            <div className="flex flex-col items-end">
              <Label className="uppercase ">danos?</Label>
              <p className="capitalize">{data.damage}</p>
            </div>
          </div>

          <div className="flex flex-col py-2">
            <h2 className="uppercase">Observações:</h2>
            {
              !data.hasAccessoryMessage && !data.hasItensMessage && !data.damageMessage ? (
                <div>
                  <p className="italic capitalize text-zinc-400">nenhuma observação...</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {
                    data.hasAccessoryMessage && <p className="italic lowercase"><strong>*Acessórios:</strong> {data.hasAccessoryMessage}</p>
                  }
                  {
                    data.hasItensMessage && <p className="italic lowercase"><strong>*Itens faltantes:</strong> {data.hasItensMessage}</p>
                  }
                  {
                    data.damageMessage && <p className="italic lowercase"><strong>*danos:</strong> {data.damageMessage}</p>
                  }
                </div>
              )
            }
          </div>


          <div className="w-full flex flex-col items-center justify-between">
            <span className="w-full h-px bg-black mb-3" />
            <div className="w-full flex items-center justify-between">
              <p className="uppercase text-xs">Gerado em <span className="">{dataFormat}</span></p>
              <p className="uppercase text-xs">ticket glpi - <span className="">{data.ticketGlpi}</span></p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-between mb-10">
            <div className="w-48 flex flex-col items-center justify-center">
              <span className="w-full h-px bg-black" />
              <span className="text-[0.7rem] capitalize">{data.delivery}</span>
              <span className="text-[0.7rem] uppercase">ggedep</span>
            </div>
            <div className="w-48 flex flex-col items-center justify-center">
              <span className="w-full h-px bg-black" />
              <span className="text-[0.7rem] capitalize">{data.employeeName}</span>
              <span className="text-[0.7rem] uppercase">colaborador</span>
            </div>
          </div>
          <p className="uppercase text-xs">COMPANHIA DE DESENVOLVIMENTO HABITACIONAL E URBANO</p>
          <span className="w-full h-px bg-black" />
          <p className="uppercase text-[9px] pt-2">Rua Boa Vista, 170 11º Bloco 2 - São Paulo - SP</p>
          <p className="uppercase text-[9px]">2.11.04.00 – Ger de Gestão Estratégica de Dados e Eng Proc</p>
        </div>
      </div>
    </div>
  )
})