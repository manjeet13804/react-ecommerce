import {createSlice} from "@reduxjs/toolkit"
const list = [
    {
      id: 1, name: "Keyboard", price: 500, imageUrl: "assets/keyboard.jpg",
      description: "this is latest keyboard", quantity: 1, totalPrice: 500
    },
    {
      id: 2, name: "Mouse", price: 300, imageUrl: "assets/mouse.jpg",
      description: "this is latest Mouse", quantity: 1, totalPrice: 300
    },
    {
      id: 3, name: "Jug", price: 200, imageUrl: "assets/jug.jpg",
      description: "this is latest jug", quantity: 1, totalPrice: 200
    },
    {
      id: 4, name: "Phone", price: 12000, imageUrl: "assets/phone.png",
      description: "this is latest Phone", quantity: 1, totalPrice: 12000
    },
    {
      id: 5, name: "Laptop", price: 25000, imageUrl: "assets/laptop.png",
      description: "this is latest laptop", quantity: 1, totalPrice: 25000
    },
    {
      id: 6, name: "Printer", price: 18000, imageUrl: "assets/printer.jpg",
      description: "this is latest printer", quantity: 1, totalPrice: 18000
    },
    {
      id: 7, name: "Toycar", price: 500, imageUrl: "assets/toycar.jpg",
      description: "this is latest Toycar", quantity: 1, totalPrice: 500
    },
    {
      id: 8, name: "Washing Machine", price: 13000, imageUrl: "assets/machine.jpg",
      description: "this is latest Washing Machine", quantity: 1, totalPrice: 13000
    }
  ]
 const listSlice = createSlice({
name:"list",
initialState:list,
reducer :{

}
})
export default listSlice.reducer;