import { ref } from 'vue'

export class VanillaVueStoreWithClass {
  #count = ref(0)
  #name = ref('')

  constructor(count: number, name: string) {
    this.#count.value = count
    this.#name.value = name
  }

  get count() {
    return this.#count.value
  }

  get name() {
    return this.#name.value
  }

  increment() {
    this.#count.value++
  }

  setName(newName: string) {
    this.#name.value = newName
  }
}

export const vanillaStoreInstanceAlpha = new VanillaVueStoreWithClass(100, 'tony')

export const vanillaStoreInstanceBeta = new VanillaVueStoreWithClass(50, 'steve')
