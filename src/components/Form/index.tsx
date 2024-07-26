import { ArrowRightIcon } from 'lucide-react'
import { FormEvent, useState } from "react";

import logocdhu from '../../assets/logo.svg'
import { SelectComponnent } from '../selectComponent';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { configDatas } from '../../../datasUtils'

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
    let array = Array.from({ length: 16 }, (_, index) => index + 1);
    let numerosComoString = array.map(num => num.toString() + 'º ANDAR');

    const [delivery, setDelivery] = useState('')
    const [ticketGlpi, setTicketGlpi] = useState(0)

    const [employeeName, setEmployeeName] = useState('');
    const [managerName, setManagerName] = useState('');
    const [costCenter, setCostCenter] = useState('');
    const [location, setLocation] = useState('SELECIONE');
    const [floor, setFloor] = useState('SELECIONE');
    const [complement, setComplement] = useState('SELECIONE');
    const [assetType, setAssetType] = useState('');
    const [assetBP, setAssetBP] = useState('');
    const [assetBrand, setAssetBrand] = useState('');
    const [description, setDescription] = useState('');

    const [hasAccessory, setHasAccessory] = useState('NÃO')
    const [status, setStatus] = useState('ENTREGUE')
    const [hasItens, setHasItens] = useState('NÃO')
    const [damage, setDamage] = useState('NÃO')

    const [hasAccessoryMessage, setHasAccessoryMessage] = useState('')
    const [hasItensMessage, setHasItensMessage] = useState('')
    const [damageMessage, setDamageMessage] = useState('')

    function handleResult(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (location === 'SELECIONE' || floor === 'SELECIONE' || complement === 'SELECIONE') {
            alert('Os campos LOCALIDADE, ANDAR E COMPLEMENTO, são obrigatorios.')
            return
        }

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
                    <p className="uppercase text-xs text-foreground">{configDatas.GER}</p>
                </div>
            </header>
            <form className="space-y-4" onSubmit={handleResult}>
                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="space-y-1">
                        <Label className="uppercase">Quem vai entregar o produto?</Label>
                        <Input
                            placeholder="NEIL ARMSTRONG"
                            value={delivery}
                            onChange={(e) => setDelivery(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <Label className="uppercase">Número do ticket glpi</Label>
                        <Input
                            type="number"
                            placeholder="123456"
                            onChange={(e) => setTicketGlpi(Number(e.target.value))}
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="space-y-1">
                        <Label className="uppercase">Nome do colaborador</Label>
                        <Input
                            placeholder="ALBERT EINSTEIN"
                            value={employeeName}
                            onChange={(e) => setEmployeeName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <Label className="uppercase">Nome do gestor</Label>
                        <Input
                            placeholder="BEETHOVEN"
                            value={managerName}
                            onChange={(e) => setManagerName(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="w-full space-y-1">
                    <Label className="uppercase">Centro de custo</Label>
                    <Input
                        placeholder={configDatas.GER}
                        value={costCenter}
                        onChange={(e) => setCostCenter(e.target.value)}
                        required
                        maxLength={65}
                    />
                </div>

                <div className="grid grid-cols-3 gap-4 w-full">
                    <SelectComponnent
                        children='localidade'
                        options={['Sede', 'Cidade IV', 'XV de Novembro', 'Santos', 'Araraquara', 'Araçatuba', 'Campinas', 'Presidente Prudente', 'Ribeirão Preto', 'Santo André', 'São José do Rio Preto', 'Sorocaba', 'São José dos Campos']}
                        placeholder={location}
                        getFunction={setLocation}
                    />

                    <SelectComponnent
                        children='Andar'
                        options={numerosComoString}
                        placeholder={floor}
                        getFunction={setFloor}
                    />

                    <SelectComponnent
                        children='Complemento'
                        options={['Bloco 01', 'Bloco 02', 'Bloco 03', 'Bloco 04', 'Bloco 05', 'Bloco 06']}
                        placeholder={complement}
                        getFunction={setComplement}
                    />
                </div>

                <div className="grid grid-cols-3 gap-4 w-full">
                    <div className="space-y-1">
                        <Label className="uppercase">Tipo do ativo</Label>
                        <Input
                            placeholder="WEBCAM"
                            value={assetType}
                            onChange={(e) => setAssetType(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <Label className="uppercase">bp/bc</Label>
                        <Input
                            placeholder="BP23456"
                            value={assetBP}
                            onChange={(e) => setAssetBP(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <Label className="uppercase">Marca do ativo</Label>
                        <Input
                            placeholder="HDCAM"
                            value={assetBrand}
                            onChange={(e) => setAssetBrand(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="w-full space-y-1">
                    <Label className="uppercase">DESCRIÇÃO DO MODELO</Label>
                    <Input
                        placeholder="WEBCAM 720P"
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
                            <SelectTrigger className='text-[0.7rem]'>
                                <SelectValue placeholder={hasAccessory} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem className='text-[0.7rem]' value="SIM">SIM</SelectItem>
                                <SelectItem className='text-[0.7rem]' value="NÃO">NÃO</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-1">
                        <Label className="uppercase text-[0.7rem]">Status do ativo</Label>
                        <Select onValueChange={setStatus}>
                            <SelectTrigger className='text-[0.7rem]'>
                                <SelectValue placeholder={status} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem className='text-[0.7rem]' value="ENTREGUE">ENTREGUE</SelectItem>
                                <SelectItem className='text-[0.7rem]' value="DEVOLUÇÃO">DEVOLUÇÃO</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-1">
                        <Label className="uppercase text-[0.7rem]">Faltou algum item?</Label>
                        <Select onValueChange={(value) => setHasItens(value)}>
                            <SelectTrigger className='text-[0.7rem]'>
                                <SelectValue placeholder={hasItens} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem className='text-[0.7rem]' value="SIM">SIM</SelectItem>
                                <SelectItem className='text-[0.7rem]' value="NÃO">NÃO</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-1">
                        <Label className="uppercase text-[0.7rem]">Item com danos?</Label>
                        <Select onValueChange={(value) => setDamage(value)}>
                            <SelectTrigger className='text-[0.7rem]'>
                                <SelectValue placeholder={damage} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem className='text-[0.7rem]' value="SIM">SIM</SelectItem>
                                <SelectItem className='text-[0.7rem]' value="NÃO">NÃO</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {
                    hasAccessory === 'SIM' &&
                    <Textarea
                        required
                        onChange={(e) => setHasAccessoryMessage(e.target.value)}
                        placeholder="Quais acessórios foram juntos com o item?"
                    />
                }

                {
                    hasItens === 'SIM' &&
                    <Textarea
                        required
                        onChange={(e) => setHasItensMessage(e.target.value)}
                        placeholder="Quais itens faltaram?"
                    />
                }

                {
                    damage == 'SIM' &&
                    <Textarea
                        required
                        onChange={(e) => setDamageMessage(e.target.value)}
                        placeholder="Quais itens estão com danos?"
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