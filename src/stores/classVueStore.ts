import { ref } from 'vue'

export class ClassVueStore {
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

export const classStoreInstanceAlpha = new ClassVueStore(100, 'tony')

export const classStoreInstanceBeta = new ClassVueStore(50, 'steve')
