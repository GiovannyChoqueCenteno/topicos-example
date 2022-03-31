import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
import clienteAxios from "../../../api/clienteAxios"
import { IPersona } from "../../../types/IPersona";
import { IPersonaState } from "../../../types/IPersonaState";

export const obtenerPersonas = createAsyncThunk( "persona/obtener",
    async()=>{
       const res = await clienteAxios.get('/persona')
       return res.data;    
    }
)

export const eliminarPersona = createAsyncThunk("persona/eliminar",
    async( id : number,_)=>{
        const res = await clienteAxios.delete(`/persona/${id}`);
        return res.data
})

export const anadirPersona = createAsyncThunk("persona/anadir" , 
    async(persona : IPersona,_)=>{
        console.log(persona)
        const res = await clienteAxios.post('/persona' , persona)
        return res.data
    }
)

const personaSlice = createSlice({
    name : "personas",
    initialState : {
        personas : [],
        loading : false
    } as IPersonaState,
    reducers : {
      
    },
    extraReducers : (builder)=>{
        builder.addCase(obtenerPersonas.pending,(state)=>{
            state.loading = true;
        }).addCase(obtenerPersonas.rejected , (state)=>{
            state.loading = false;
        }).addCase(obtenerPersonas.fulfilled , (state,{payload})=>{
            state.loading  = false;
            state.personas = payload;
        } ).addCase(anadirPersona.fulfilled , (state,action)=>{
            state.personas = [...state.personas , action.payload]
            toast.success('Añadido Correctamente')
        }).addCase(anadirPersona.rejected ,()=>{
            toast.error('Error no se pudo añadir')
        }).addCase(eliminarPersona.fulfilled , (state,action)=>{
            state.personas = state.personas.filter( persona => persona.id!== action.payload.id)
            toast.success('Eliminado correctamente')
        }).addCase(eliminarPersona.rejected , ()=>{
            toast.error('Error no se pudo eliminar')
        })
    }
})





export default personaSlice.reducer