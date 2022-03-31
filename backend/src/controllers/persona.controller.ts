import prisma from "../config/prisma"
import { Request , Response } from "express"
import { Persona } from "@prisma/client";

export const obtenerPersonas = async(req : Request , res : Response)=>{
    try {
        const personas : Persona[] = await prisma.persona.findMany();
        res.json( personas)
    } catch (error) {
        res.status(500).json({
            "msg" : "Server Error"
        })
    }
}

export const anadirPersona = async(req : Request , res : Response)=>{
    try {
        const {nombre ,apellido , email , telefono} : Persona = req.body;
        console.log("Creando")
        const persona =await prisma.persona.create({
            data :{
                nombre,
                apellido,
                email,
                telefono : Number(telefono)
            }
        })
        res.status(201).send(persona)
    } catch (error) {
        res.status(500).json({
            "msg" : error
        })
    }
}


export const eliminarPersona =async (req : Request , res : Response) => {
    const {id} = req.params;
    try {
        const persona = await prisma.persona.delete({
            where : {
                id : Number(id)
            }
        })
        res.send(persona)
    } catch (error) {
        res.status(500).json({
            "msg" : error
        })
    }
}

