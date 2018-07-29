interface Printable {
  printToConsole(): void
}

enum BeingType {
  Animal,
  Plant,
  Bacteria, 
  Fungus
}

interface Being {
  type: BeingType
}

class Person implements Printable, Being {

  type: BeingType = BeingType.Animal
  
  private name: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  printToConsole() {
    console.log(`My name is ${this.name}`)
    console.log(`I\'m ${this.age}`)
  }

}

interface PricingData {
  brl: number
  usd: number
  eur: number
}

import axios from 'axios'

axios.get('http://localhost:3000/')
.then(res => res.data)
.then((data: PricingData) => {
  console.log('BTC prices received')
  console.log(`BRL: ${data.brl}`)
  console.log(`USD: ${data.usd}`)
  console.log(`EUR: ${data.eur}`)
})