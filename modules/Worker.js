import {Person} from "./Person.js";

export class Worker extends Person {

  #rate = 1000
  #days = 0

  constructor(firstName, lastName, birthDay, position) {
    super(firstName, lastName, birthDay);
    this.position = position
  }

  get rate() {
    return this.#rate
  }

  set rate(gold) {
    if (gold >= 1000 && this.#days >= 1) {
      this.#rate = gold
    } else {
      console.log(`Ошибка! Ставка не меняется`)
    }
  }

  addDays(workDays) {
    function getDaysInCurrentMonth() {
      const date = new Date();

      return new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0,
      ).getDate();
    }

    const result = getDaysInCurrentMonth();
    if (workDays >= 1 && workDays < result) {
      this.#days = workDays
    } else {
      console.log(`Ошибка! Нету возможности установить данную дату`)
    }
  }

  getSalary () {
    console.log(this.birthDay)
    const currentDate = new Date().getMonth() + 1
    let birthDate = new Date(this.birthDay).getMonth() + 1
    if(currentDate === birthDate) {
      let percent = 10
      let newSalary = this.#rate + (this.#rate * percent) / 100
      return newSalary * this.#days
    } else {
      return this.#rate * this.#days
    }
  }

}

let porse = new Worker()

console.log(porse.rate)
porse.addDays(13)
porse.rate = 2000
console.log(porse.rate)



console.log(porse.getSalary())


