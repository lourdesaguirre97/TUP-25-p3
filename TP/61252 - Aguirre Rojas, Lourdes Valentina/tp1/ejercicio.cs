using System; using System.IO;

struct Contacto { public int Id; public string Nombre; public string Telefono; public string Email; }

class Program { const int MAX_CONTACTOS = 100; static Contacto[] agenda = new Contacto[MAX_CONTACTOS]; static int totalContactos = 0; static int ultimoId = 0;

static void Main()
{
    CargarContactos();
    while (true)
    {
        Console.WriteLine("\nMenú de Agenda:");
        Console.WriteLine("1. Agregar contacto");
        Console.WriteLine("2. Modificar contacto");
        Console.WriteLine("3. Borrar contacto");
        Console.WriteLine("4. Listar contactos");
        Console.WriteLine("5. Buscar contacto");
        Console.WriteLine("6. Salir");
        Console.Write("Seleccione una opción: ");
        
        string opcion = Console.ReadLine();
        switch (opcion)
        {
            case "1": AgregarContacto(); break;
            case "2": ModificarContacto(); break;
            case "3": BorrarContacto(); break;
            case "4": ListarContactos(); break;
            case "5": BuscarContacto(); break;
            case "6": GuardarContactos(); return;
            default: Console.WriteLine("Opción inválida."); break;
        }
    }
}

static void AgregarContacto()
{
    if (totalContactos >= MAX_CONTACTOS)
    {
        Console.WriteLine("No se pueden agregar más contactos.");
        return;
    }
    Contacto nuevo;
    nuevo.Id = ++ultimoId;
    Console.Write("Nombre: "); nuevo.Nombre = Console.ReadLine();
    Console.Write("Teléfono: "); nuevo.Telefono = Console.ReadLine();
    Console.Write("Email: "); nuevo.Email = Console.ReadLine();
    agenda[totalContactos++] = nuevo;
    Console.WriteLine("Contacto agregado.");
}

static void ModificarContacto()
{
    Console.Write("Ingrese ID del contacto a modificar: ");
    int id = int.Parse(Console.ReadLine());
    for (int i = 0; i < totalContactos; i++)
    {
        if (agenda[i].Id == id)
        {
            Console.Write("Nuevo nombre (enter para no cambiar): ");
            string nombre = Console.ReadLine();
            if (nombre != "") agenda[i].Nombre = nombre;
            
            Console.Write("Nuevo teléfono (enter para no cambiar): ");
            string telefono = Console.ReadLine();
            if (telefono != "") agenda[i].Telefono = telefono;
            
            Console.Write("Nuevo email (enter para no cambiar): ");
            string email = Console.ReadLine();
            if (email != "") agenda[i].Email = email;
            
            Console.WriteLine("Contacto modificado.");
            return;
        }
    }
    Console.WriteLine("ID no encontrado.");
}

static void BorrarContacto()
{
    Console.Write("Ingrese ID del contacto a borrar: ");
    int id = int.Parse(Console.ReadLine());
    for (int i = 0; i < totalContactos; i++)
    {
        if (agenda[i].Id == id)
        {
            for (int j = i; j < totalContactos - 1; j++)
            {
                agenda[j] = agenda[j + 1];
            }
            totalContactos--;
            Console.WriteLine("Contacto eliminado.");
            return;
        }
    }
    Console.WriteLine("ID no encontrado.");
}

static void ListarContactos()
{
    Console.WriteLine("\nID   Nombre                Teléfono        Email");
    Console.WriteLine("---------------------------------------------------");
    for (int i = 0; i < totalContactos; i++)
    {
        Console.WriteLine("{0,-4} {1,-20} {2,-15} {3}", agenda[i].Id, agenda[i].Nombre, agenda[i].Telefono, agenda[i].Email);
    }
}

static void BuscarContacto()
{
    Console.Write("Ingrese término de búsqueda: ");
    string termino = Console.ReadLine().ToLower();
    Console.WriteLine("\nID   Nombre                Teléfono        Email");
    Console.WriteLine("---------------------------------------------------");
    for (int i = 0; i < totalContactos; i++)
    {
        if (agenda[i].Nombre.ToLower().Contains(termino) || agenda[i].Telefono.Contains(termino) || agenda[i].Email.ToLower().Contains(termino))
        {
            Console.WriteLine("{0,-4} {1,-20} {2,-15} {3}", agenda[i].Id, agenda[i].Nombre, agenda[i].Telefono, agenda[i].Email);
        }
    }
}

static void CargarContactos()
{
    if (!File.Exists("agenda.csv")) return;
    string[] lineas = File.ReadAllLines("agenda.csv");
    foreach (string linea in lineas)
    {
        string[] datos = linea.Split(',');
        Contacto c;
        c.Id = int.Parse(datos[0]);
        c.Nombre = datos[1];
        c.Telefono = datos[2];
        c.Email = datos[3];
        agenda[totalContactos++] = c;
        if (c.Id > ultimoId) ultimoId = c.Id;
    }
}

static void GuardarContactos()
{
    string[] lineas = new string[totalContactos];
    for (int i = 0; i < totalContactos; i++)
    {
        lineas[i] = $"{agenda[i].Id},{agenda[i].Nombre},{agenda[i].Telefono},{agenda[i].Email}";
    }
    File.WriteAllLines("agenda.csv", lineas);
}

}