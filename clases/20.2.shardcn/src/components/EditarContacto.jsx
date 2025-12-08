import { useMemo } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function EditarContacto({
  isOpen,
  onOpenChange,
  formValues,
  onFormChange,
  onSubmit,
  savedValues,
  children
}) {
  const hasChanges = useMemo(() => {
    return (
      formValues.firstName !== savedValues.firstName ||
      formValues.lastName !== savedValues.lastName ||
      formValues.phone !== savedValues.phone
    )
  }, [formValues, savedValues])

  const handleChange = (event) => {
    const { name, value } = event.target
    onFormChange(name, value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Editar contacto</DialogTitle>
          <DialogDescription>
            Completa los campos para actualizar la información de la persona.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="firstName">Nombre</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
              placeholder="Ej. Ada"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="lastName">Apellido</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
              placeholder="Ej. Lovelace"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input
              id="phone"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
              placeholder="Ej. +54 9 11 1234 5678"
            />
          </div>

          <DialogFooter className="gap-2 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={!hasChanges}>
              Guardar cambios
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditarContacto