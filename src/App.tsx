import { useState } from "react"

import { Form, FormDataProps } from "./components/Form"
import { PrintPage } from "./components/Print"
import { Footer } from "./components/footer/Footer"

export function App() {
  const [dadosFormulario, setDadosFormulario] = useState<FormDataProps | null>(null)

  return (
    <div className="max-w-2xl mx-auto pb-12 px-12 ">
      {!dadosFormulario ? (
        <Form onSubmit={(data) => setDadosFormulario(data)} />
      ) : (
        <PrintPage {...dadosFormulario} />
      )}

      <Footer />
    </div>
  )
}
