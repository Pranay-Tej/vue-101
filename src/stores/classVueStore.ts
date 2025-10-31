import { computed, ref } from 'vue'

export class ClassVueStore {
  #count = ref(0)
  #name = ref('')
  public doubleCountComputed = computed(() => {
    console.log('doubleCount recomputed')
    return this.#count.value * 2
  })

  constructor(count: number, name: string) {
    this.#count.value = count
    this.#name.value = name
  }

  get count() {
    return this.#count.value
  }

  get doubleCountGet() {
    // this will run EVERY-time/EVERYWHERE doubleCountGet or ANY other property (name) is accessed
    // NOT recommended, use computed() instead
    console.log('doubleCountGet accessed')
    return this.#count.value * 2
  }

  // set count(newValye: number) {
  //   if (newValye === 25) {
  //     console.error('Setting count to 25 is not allowed.')
  //     return
  //   }
  //   this.#count.value = newValye
  // }

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
