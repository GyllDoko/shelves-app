import axios from "axios";
import { create } from "zustand";

interface StoreProps {
  displayList: boolean
  shelvesList: object[]
  shelvesSearchList: object[]
  currentForm: object
  getShelvesData: ()=> void
  changeDisplayList: ()=> void
  setCurrentForm: (form: object)=> void
  saveShelf: any
}

export const useGlobalStore = create<StoreProps>((set)=>({
  displayList: true,
  shelvesList: [],
  currentForm: {},
  shelvesSearchList: [],
  getShelvesData: async()=> {
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/5a8411b53ed02c04187ff02a/shelves?limit=20` )
    set({shelvesList: data})
  },
  changeDisplayList: ()=> {
    set((state)=>({displayList: !state.displayList}))
  },
  setCurrentForm: (form: object)=> {
    set({currentForm: form})
  },
  saveShelf:  (forms: object[])=> set({
    shelvesSearchList: forms
  })
  }
))