"use server"

import axios from "axios"

export const getFormsId = async (shelveId: string)=>{
  try {
    const formList = []
    const {data, status} = await axios.get(`${process.env.API_URL}/shelves/${shelveId}/forms?limit=20`)
    if(status === 200){
      for (let index = 0; index < data.length; index++) {
        const {data: shelves, status} = await axios.get(`${process.env.API_URL}/forms/${data[index]}`)
        if(status === 200){
          formList.push(shelves)
        }
      }
    }
    return formList
  } catch (error) {
    throw new Error("Forms Ids not fetch ")
  }
}

export const getForm = async (formId: string)=>{
  try {
    const {data, status} = await axios.get(`${process.env.API_URL}/forms/${formId}`)
    if(status === 200){
      return data
    }
  } catch (error) {
    throw new Error("Form not fetch ")
  }
}