import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const INITIAL_CONTACT = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  phone: '+54 11 5555-5555',
}

function App() {
  const [contact, setContact] = useState(INITIAL_CONTACT)
  const [status, setStatus] = useState('Sin cambios pendientes.')
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }))
    setHasUnsavedChanges(true)
    setStatus('Hay cambios sin guardar.')
  }

  function handleSubmit(event) {
    event.preventDefault()
    setHasUnsavedChanges(false)
    setStatus('Información actualizada correctamente.')
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Editar contacto</CardTitle>
          <CardDescription>Actualiza los datos básicos de la persona.</CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="firstName">Nombre</Label>
              <Input
                id="firstName"
                name="firstName"
                value={contact.firstName}
                onChange={handleChange}
                placeholder="Ej. Ana"
                autoComplete="given-name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Apellido</Label>
              <Input
                id="lastName"
                name="lastName"
                value={contact.lastName}
                onChange={handleChange}
                placeholder="Ej. Pérez"
                autoComplete="family-name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                name="phone"
                value={contact.phone}
                onChange={handleChange}
                placeholder="Ej. +54 11 1234-5678"
                autoComplete="tel"
                inputMode="tel"
              />
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">{status}</p>
              <Button
                type="submit"
                className="w-full sm:w-auto"
                disabled={!hasUnsavedChanges}
              >
                Guardar cambios
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
