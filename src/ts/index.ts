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

interface PricingDataHandler {
  (data: PricingData): void
}

import axios from 'axios'

function getBTCPrices(handler?: PricingDataHandler) {
  const call = axios.get('http://localhost:3000/').then(res => res.data)
  if(!handler) {
    handler = (data: PricingData) => {
      console.log('BTC prices received')
      console.log(`BRL: ${data.brl}`)
      console.log(`USD: ${data.usd}`)
      console.log(`EUR: ${data.eur}`)
    }
  }
  return call.then(handler)
}

getBTCPrices()
getBTCPrices(data => {
  console.log(`BTC is US${data.usd} today`)
})