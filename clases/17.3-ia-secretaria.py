#!/usr/bin/env python3
"""
Chat con IA Secretaria usando Gemini API
Versión Python simplificada
"""

import json
import requests
from typing import List, Dict, Any
from dataclasses import dataclass
from pathlib import Path

# Configuración de la API
API_KEY  = "AIzaSyDNb3IWwI5tjnGXj4EFAsih0HJww1HgN7M"
MODELO   = "gemini-2.5-flash-preview-04-17"
ENDPOINT = f"https://generativelanguage.googleapis.com/v1beta/models/{MODELO}:generateContent?key={API_KEY}"

@dataclass
class Mensaje:
    """Representa un mensaje en el chat"""
    role: str
    text: str
    
    def to_api_format(self) -> Dict[str, Any]:
        """Convierte el mensaje al formato de la API"""
        return {
            "role": self.role,
            "parts": [{"text": self.text}]
        }

class ChatSecretaria:
    """Maneja la conversación con la IA secretaria"""
    
    def __init__(self):
        self.historial: List[Mensaje] = []
        self.session = requests.Session()
        self._inicializar_contexto()
    
    def _inicializar_contexto(self):
        """Establece el contexto inicial de la secretaria"""
        contexto_inicial = """
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
        """
        
        self.agregar_mensaje("user", contexto_inicial)
    
    def agregar_mensaje(self, role: str, texto: str):
        """Agrega un mensaje al historial"""
        self.historial.append(Mensaje(role, texto))
    
    def obtener_respuesta(self) -> str:
        """Obtiene respuesta de la API de Gemini"""
        payload = {
            "contents": [msg.to_api_format() for msg in self.historial]
        }
        
        try:
            response = self.session.post(
                ENDPOINT,
                json=payload,
                headers={"Content-Type": "application/json"}
            )
            response.raise_for_status()
            
            data = response.json()
            respuesta = data["candidates"][0]["content"]["parts"][0]["text"]
            
            # Agregar respuesta al historial
            self.agregar_mensaje("model", respuesta)
            
            return respuesta
            
        except requests.RequestException as e:
            return f"Error de conexión: {e}"
        
        except (KeyError, IndexError) as e:
            return f"Error en la respuesta: {e}"
    
    def guardar_conversacion(self, archivo: str = "17.3.respuesta.md"):
        """Guarda la conversación en formato Markdown"""
        contenido = ["## Conversación con Gemini\n"]
        
        for msg in self.historial:
            autor = "**Tú**" if msg.role == "user" else "**IA**"
            contenido.append(f"{autor}: {msg.text}\n")
        
        Path(archivo).write_text("\n".join(contenido), encoding="utf-8")

def main():
    """Función principal del chat"""
    chat = ChatSecretaria()
    
    # Obtener respuesta inicial
    print("=== Chat con Gemini ===")
    print("(Escribe 'salir' para terminar la conversación)")
    print()
    
    respuesta_inicial = chat.obtener_respuesta()
    print(f"IA: {respuesta_inicial}")
    
    # Bucle principal del chat
    while True:
        print()
        entrada = input("Tú: ").strip()
        
        if not entrada or entrada.lower() == "salir":
            print("Finalizando el chat. ¡Hasta pronto!")
            break
        
        # Agregar mensaje del usuario
        chat.agregar_mensaje("user", entrada)
        
        # Obtener respuesta de la IA
        respuesta = chat.obtener_respuesta()
        
        # Formatear respuesta si contiene código
        if respuesta.strip().startswith("```"):
            respuesta = "\n" + respuesta.strip()
        
        print(f"\nIA: {respuesta}")
        
        # Guardar conversación
        chat.guardar_conversacion()

if __name__ == "__main__":
    main()
