import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import EditarContacto from '@/components/EditarContacto'

const DEFAULT_PERSON = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  phone: '+44 20 7946 0018',
}

function App() {
  const [formValues, setFormValues] = useState(DEFAULT_PERSON)
  const [savedValues, setSavedValues] = useState(DEFAULT_PERSON)
  const [statusMessage, setStatusMessage] = useState('Sin cambios pendientes.')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleChange = (name, value) => {
    setFormValues((prev) => ({ ...prev, [name]: value }))
    setStatusMessage('Tienes cambios sin guardar.')
  }

  const handleSubmit = () => {
    setSavedValues({ ...formValues })
    setStatusMessage('Cambios guardados.')
    setIsDialogOpen(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted p-4">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Contacto</CardTitle>
          <CardDescription>
            Información del contacto guardado
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label className="text-sm font-medium text-muted-foreground">Nombre</Label>
              <div className="text-sm">{savedValues.firstName}</div>
            </div>

            <div className="grid gap-2">
              <Label className="text-sm font-medium text-muted-foreground">Apellido</Label>
              <div className="text-sm">{savedValues.lastName}</div>
            </div>

            <div className="grid gap-2">
              <Label className="text-sm font-medium text-muted-foreground">Teléfono</Label>
              <div className="text-sm">{savedValues.phone}</div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between items-center border-t pt-6">
          <span className="text-sm text-muted-foreground">{statusMessage}</span>
          
          <EditarContacto
            isOpen={isDialogOpen}
            onOpenChange={setIsDialogOpen}
            formValues={formValues}
            onFormChange={handleChange}
            onSubmit={handleSubmit}
            savedValues={savedValues}
          >
            <Button>Editar</Button>
          </EditarContacto>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
