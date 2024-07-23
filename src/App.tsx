import { useState } from "react"

import { Form, FormDataProps } from "./components/Form"
import { PrintPage } from "./components/Print"
import { Footer } from "./components/footer/Footer"

export function App() {
  const [dadosFormulario, setDadosFormulario] = useState<FormDataProps | null>(null)

  return (
    <div className="max-w-2xl my-4 mx-auto px-12 py-7 rounded-xl bg-white shadow-custom-dark">
      {!dadosFormulario ? (
        <Form onSubmit={(data) => setDadosFormulario(data)} />
      ) : (
        <PrintPage {...dadosFormulario} />
      )}
      <Footer />
    </div>
  )
}