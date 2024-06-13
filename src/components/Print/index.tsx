import { useRef } from "react"
import { useReactToPrint } from "react-to-print"
import { ComponenteImpressao } from "../impressao"
import { FormDataProps } from "../Form"
import { Button } from "../ui/button"
import { PrinterIcon } from 'lucide-react'

export function PrintPage(data: FormDataProps) {
  const componenteImpressaoRef = useRef<HTMLDivElement>(null)
  const handlePrint = useReactToPrint({
    content: () => componenteImpressaoRef.current,
  })
  return (
    <div className='w-full *:flex flex-col items-center space-y-4'>
      <ComponenteImpressao ref={componenteImpressaoRef} {...data} />
      <Button onClick={handlePrint} className="w-full uppercase">
        imprimir
        <PrinterIcon className="size-4 ml-2" />
      </Button>
    </div>
  )
}