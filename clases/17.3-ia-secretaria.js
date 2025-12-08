#!/usr/bin/env node
/**
 * Chat con IA Secretaria usando Gemini API
 * Versión JavaScript (Node.js)
 */

const fs = require('fs').promises;
const readline = require('readline');

// Configuración de la API
const API_KEY = "AIzaSyDNb3IWwI5tjnGXj4EFAsih0HJww1HgN7M";
const MODELO = "gemini-2.5-flash-preview-04-17";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODELO}:generateContent?key=${API_KEY}`;

/**
 * Representa un mensaje en el chat
 */
class Mensaje {
    constructor(role, text) {
        this.role = role;
        this.text = text;
    }

    /**
     * Convierte el mensaje al formato de la API
     */
    toApiFormat() {
        return {
            role: this.role,
            parts: [{ text: this.text }]
        };
    }
}

/**
 * Maneja la conversación con la IA secretaria
 */
class ChatSecretaria {
    constructor() {
        this.historial = [];
        this._inicializarContexto();
    }

    /**
     * Establece el contexto inicial de la secretaria
     */
    _inicializarContexto() {
        const contextoInicial = `
        Actua como una secretaria que ayuda a llevar la agenda de contactos y citas.
        Eres muy cortes y eficas, siempre respondes a mis preguntas de manera clara y concisa.
        
        # Contactos 
            ID   Legajo Nombre y Apellido                    Teléfono        Asistencias
            01.  61203  Acevedo Costello, Juan Ignacio       (381) 388-7804   17  
            02.  61667  Acosta, Maira                        (381) 562-8162   20  
            03.  62055  Ahumada, Aiquén                      (381) 419-9202   19  
            04.  61118  Barrios, Santiago Alexis             (381) 526-8193   19  
            05.  61319  Carabajal, José Gabriel              (381) 562-7688   17  
            06.  61214  Collazos Cortez, Máximo Alberto      (381) 350-5275   17  
            07.  61141  Di Clemente, María Antonela          (381) 398-3935   15  
            08.  61730  Diaz, Antonio                        (381) 392-6461    3  
            09.  61626  Diaz Londero, Sergio Gonzalo         (381) 604-6547   16  
            10.  61271  Donelli, Gerardo Exequiel            (381) 514-3223   19  
            11.  61221  Duclós, Marcelo Ezequiel             (381) 551-4353   20  
            12.  61720  Fernández, Luciano                   (381) 586-7891    0  
            13.  62093  Frías Silva, Juan Segundo            (381) 415-8753   15  
            14.  61139  Gallo, María Matilde                 (381) 333-4836   12  
            15.  61352  García Moya, José Ignacio            (381) 638-9006   17  
            16.  61200  Gauna Serrano, Martín Javier         (381) 389-2631   19  
            17.  61624  Godoy, Alan                          (381) 574-4877   17  
            18.  61595  González Patti, Valentín             (381) 655-9195   17  
            19.  61562  Helguera, Agustina Elizabeth         (381) 694-9619   19  
            20.  61318  Herrera, Dalma Luján                 (381) 341-4968   11  
            21.  62053  Herrera Palomino, Ivam Agustín       (381) 697-0643   21  
            22.  61450  Jiménez Paz, Patricio Agustín        (387) 388-2674   19  
            23.  61627  Juárez Fernández, Lourdes Abril      (381) 647-9914   21  
            24.  61473  Lagoria García, Tomás Gustavo        (381) 357-7724   20  
            25.  61956  Leglisé, Laureano                    (261) 468-9809   19  
            26.  61679  Lobo Barrera, Mia de los Angeles     (381) 677-0639   21  
            27.  61794  Lobo Campero, Hernán Ignacio         (381) 590-6461   15    
        
        # Citas
            Martes a Jueves de 8:00 a 10:00 hs tengo clases en la Comision 3
            Lunes y Miércoles de 8:00 a 10:00 hs tengo clases en la Comision 2
            Lunes y Martes de 10:00 a 12:00 hs tengo clases en la Comision 1
            El miercoles por la tarde tengo que asistir a la conferencia sobre IA de la UTN, es de 18:00 a 20:00 hs
        `;
        
        this.agregarMensaje("user", contextoInicial);
    }

    /**
     * Agrega un mensaje al historial
     */
    agregarMensaje(role, texto) {
        this.historial.push(new Mensaje(role, texto));
    }

    /**
     * Obtiene respuesta de la API de Gemini
     */
    async obtenerRespuesta() {
        const payload = {
            contents: this.historial.map(msg => msg.toApiFormat())
        };

        try {
            const response = await fetch(ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const respuesta = data.candidates[0].content.parts[0].text;
            
            // Agregar respuesta al historial
            this.agregarMensaje("model", respuesta);
            
            return respuesta;

        } catch (error) {
            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                return `Error de conexión: ${error.message}`;
            }
            return `Error en la respuesta: ${error.message}`;
        }
    }

    /**
     * Guarda la conversación en formato Markdown
     */
    async guardarConversacion(archivo = "17.3.respuesta.md") {
        const contenido = ["## Conversación con Gemini\n"];
        
        for (const msg of this.historial) {
            const autor = msg.role === "user" ? "**Tú**" : "**IA**";
            contenido.push(`${autor}: ${msg.text}\n`);
        }

        try {
            await fs.writeFile(archivo, contenido.join("\n"), 'utf-8');
        } catch (error) {
            console.error(`Error guardando archivo: ${error.message}`);
        }
    }
}

/**
 * Función principal del chat
 */
async function main() {
    const chat = new ChatSecretaria();
    
    // Configurar readline para entrada del usuario
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Función helper para preguntar al usuario
    const pregunta = (prompt) => {
        return new Promise((resolve) => {
            rl.question(prompt, resolve);
        });
    };

    console.log("=== Chat con Gemini ===");
    console.log("(Escribe 'salir' para terminar la conversación)");
    console.log();

    // Obtener respuesta inicial
    const respuestaInicial = await chat.obtenerRespuesta();
    console.log(`IA: ${respuestaInicial}`);

    // Bucle principal del chat
    while (true) {
        console.log();
        const entrada = (await pregunta("Tú: ")).trim();
        
        if (!entrada || entrada.toLowerCase() === "salir") {
            console.log("Finalizando el chat. ¡Hasta pronto!");
            break;
        }

        // Agregar mensaje del usuario
        chat.agregarMensaje("user", entrada);

        // Obtener respuesta de la IA
        const respuesta = await chat.obtenerRespuesta();

        // Formatear respuesta si contiene código
        const respuestaFormateada = respuesta.trim().startsWith("```") 
            ? "\n" + respuesta.trim() 
            : respuesta;

        console.log(`\nIA: ${respuestaFormateada}`);

        // Guardar conversación
        await chat.guardarConversacion();
    }

    rl.close();
}

// Ejecutar si es el archivo principal
if (require.main === module) {
    main().catch(console.error);
}
