import { ArrowRightIcon } from 'lucide-react'
import { FormEvent, useState } from "react";

import logocdhu from '../../assets/logo.svg'
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";

export interface FormDataProps {
    employeeName: string
    managerName: string
    costCenter: string
    location: string
    floor: string
    complement: string
    assetType: string
    assetBP: string
    assetBrand: string
    description: string
    hasAccessory: string
    status: string
    hasItens: string
    damage: string
    hasAccessoryMessage?: string
    hasItensMessage?: string
    damageMessage?: string
    delivery: string
    ticketGlpi: number
}

interface Props {
    onSubmit: (data: FormDataProps) => void
}

export function Form({ onSubmit }: Props) {
    const [delivery, setDelivery] = useState('')
    const [ticketGlpi, setTicketGlpi] = useState(0)

    const [employeeName, setEmployeeName] = useState('');
    const [managerName, setManagerName] = useState('');
    const [costCenter, setCostCenter] = useState('');
    const [location, setLocation] = useState('');
    const [floor, setFloor] = useState('');
    const [complement, setComplement] = useState('');
    const [assetType, setAssetType] = useState('');
    const [assetBP, setAssetBP] = useState('');
    const [assetBrand, setAssetBrand] = useState('');
    const [description, setDescription] = useState('');

    const [hasAccessory, setHasAccessory] = useState('Não')
    const [status, setStatus] = useState('Entregue')
    const [hasItens, setHasItens] = useState('Não')
    const [damage, setDamage] = useState('Não')

    const [hasAccessoryMessage, setHasAccessoryMessage] = useState('')
    const [hasItensMessage, setHasItensMessage] = useState('')
    const [damageMessage, setDamageMessage] = useState('')

    function handleResult(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(hasAccessory)
        console.log(hasItens)
        console.log(damage)

        onSubmit({
            employeeName,
            managerName,
            costCenter,
            location,
            floor,
            complement,
            assetType,
            assetBP,
            assetBrand,
            description,
            hasAccessory,
            status,
            hasItens,
            damage,
            hasAccessoryMessage,
            hasItensMessage,
            damageMessage,
            delivery,
            ticketGlpi
        })
    }

    return (
        <div className="max-w-2xl mx-auto mt-4 p-6 space-y-12 flex flex-col items-center border-double border-4 border-black">
            <header className="w-full flex flex-col mb-2 items-center space-y-4">
                <img src={logocdhu} alt="logo da CDHU" />
                <div className="w-full flex flex-col items-center justify-center space-y-2">
                    <h1 className="text-xl uppercase font-bold">FORMULÁRIO DE CONTROLE DE PATRIMÔNIO</h1>
                    <p className="uppercase text-xs text-foreground">2.11.04.00 – GER DE GESTÃO ESTRATEGICA DE DADOS E ENG PROC</p>
                </div>
            </header>
            <form className="space-y-4" onSubmit={handleResult}>
                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="space-y-1">
                        <Label className="uppercase">Quem vai entregar o produto?</Label>
                        <Input
                            placeholder="Ex: João Da Silva"
                            value={delivery}
                            onChange={(e) => setDelivery(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <Label className="uppercase">Número do ticket glpi</Label>
                        <Input
                            type="number"
                            placeholder="Ex: 123456"
                            onChange={(e) => setTicketGlpi(Number(e.target.value))}
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="space-y-1">
                        <Label className="uppercase">Nome do colaborador</Label>
                        <Input
                            placeholder="Ex: Jãoo Da Silva"
                            value={employeeName}
                            onChange={(e) => setEmployeeName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <Label className="uppercase">Nome do gestor</Label>
                        <Input
                            placeholder="Ex: Maria Da Silva"
                            value={managerName}
                            onChange={(e) => setManagerName(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="w-full space-y-1">
                    <Label className="uppercase">Centro de custo</Label>
                    <Input
                        placeholder="Ex: 2.11.02.00 - GER DE SERVICE DESK, INFRAESTR E SEG DA INFORMACAO"
                        value={costCenter}
                        onChange={(e) => setCostCenter(e.target.value)}
                        required
                        maxLength={65}
                    />
                </div>

                <div className="grid grid-cols-3 gap-4 w-full">
                    <div className="space-y-1">
                        <Label className="uppercase">Localidade</Label>
                        <Input
                            placeholder="Ex: Sede"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <Label className="uppercase">Andar</Label>
                        <Input
                            placeholder="Ex: 11B1"
                            value={floor}
                            onChange={(e) => setFloor(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <Label className="uppercase">Complemento</Label>
                        <Input
                            placeholder="Ex: Sede"
                            value={complement}
                            onChange={(e) => setComplement(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 w-full">
                    <div className="space-y-1">
                        <Label className="uppercase">Tipo do ativo</Label>
                        <Input
                            placeholder="Ex: WebCam"
                            value={assetType}
                            onChange={(e) => setAssetType(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <Label className="uppercase">bc/sn</Label>
                        <Input
                            placeholder="Ex: BP23456"
                            value={assetBP}
                            onChange={(e) => setAssetBP(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <Label className="uppercase">Marca do ativo</Label>
                        <Input
                            placeholder="Ex: HDCAM"
                            value={assetBrand}
                            onChange={(e) => setAssetBrand(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="w-full space-y-1">
                    <Label className="uppercase">DESCRIÇÃO DO MODELO</Label>
                    <Input
                        placeholder="Ex: Webcam 720p"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        maxLength={65}
                    />
                </div>

                <div className="grid grid-cols-4 gap-4 w-full">
                    <div className="space-y-1">
                        <Label className="uppercase text-[0.7rem]">Acessórios?</Label>
                        <Select onValueChange={(e) => setHasAccessory(e)}>
                            <SelectTrigger>
                                <SelectValue placeholder={hasAccessory} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Sim">Sim</SelectItem>
                                <SelectItem value="Não">Não</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-1">
                        <Label className="uppercase text-[0.7rem]">Status do ativo</Label>
                        <Select onValueChange={setStatus}>
                            <SelectTrigger>
                                <SelectValue placeholder={status} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Entregue">Entregue</SelectItem>
                                <SelectItem value="Não Entregue">Não Entregue</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-1">
                        <Label className="uppercase text-[0.7rem]">Faltou algum item?</Label>
                        <Select onValueChange={(value) => setHasItens(value)}>
                            <SelectTrigger className="">
                                <SelectValue placeholder={hasItens} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Sim">Sim</SelectItem>
                                <SelectItem value="Não">Não</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-1">
                        <Label className="uppercase text-[0.7rem]">Item com danos?</Label>
                        <Select onValueChange={(value) => setDamage(value)}>
                            <SelectTrigger>
                                <SelectValue placeholder={damage} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Sim">Sim</SelectItem>
                                <SelectItem value="Não">Não</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {
                    hasAccessory === 'Sim' &&
                    <Textarea
                        onChange={(e) => setHasAccessoryMessage(e.target.value)}
                        placeholder="Quais acessórios foram juntos com o item?"
                    // maxLength={55}
                    />
                }

                {
                    hasItens === 'Sim' &&
                    <Textarea
                        onChange={(e) => setHasItensMessage(e.target.value)}
                        placeholder="Quais itens faltaram?"
                    // maxLength={55}
                    />
                }

                {
                    damage == 'Sim' &&
                    <Textarea
                        onChange={(e) => setDamageMessage(e.target.value)}
                        placeholder="Quais itens estão com danos?"
                    // maxLength={55}
                    />
                }

                <Button type="submit" className="w-full uppercase">
                    próximo
                    <ArrowRightIcon className="size-4 ml-2" />
                </Button>
            </form>
        </div>
    )
}