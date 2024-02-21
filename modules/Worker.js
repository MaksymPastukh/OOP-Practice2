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
    let oneWorkDay = 1
    if (gold >= 1000 && oneWorkDay === 1) {
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
    if (workDays >= 1 && workDays <= result) {
      this.#days = workDays
    } else {
      console.log(`Ошибка! Нету возможности установить данную дату`)
    }
  }

  getSalary() {
    const currentDate = new Date().getMonth() + 1
    let birthDate = new Date(this.birthDay).getMonth() + 1
    if (currentDate === birthDate) {
      let percent = 10
      let newSalary = this.#rate + (this.#rate * percent) / 100
      return newSalary * this.#days
    } else {
      return this.#rate * this.#days
    }
  }

  getFullName() {
    return `${super.getFullName()}`;
  }

  get birthDay() {
    return super.birthDay
  }

  set birthDay(date) {
    super.birthDay = date;
  }

  getDays() {
    return this.#days
  }

  static whoWorkerMore(...workers) {
    //Используем метод Math.max() для получения максимально числа.
    // Методом map возвращаем максимальное число и записываем в переменную maxDays
    const maxDays = Math.max(...workers.map(worker => worker.getDays()))
    // Используем метод фильтрации по обьекту и сравниваем количество рабочих дней в обьекте с числом которое мы вернули в переменную maxDays
    const workWhoWorkerMore = workers.filter(worker => worker.getDays() === maxDays)
    // Проходимся циклом по массиву циклом и возвращаем строку с человеком который больше всего отработал дней
    workWhoWorkerMore.forEach(item => {
      return console.log(`Больше всех отработал ${item.getFullName()}. Количество рабочих дней - ${item.getDays()}`)
    })
  }

  getAge() {
    const date = new Date()
    let birth = new Date(this.birthDay)
    let ageInMillisecond = date - birth,
      ageInSeconds = ageInMillisecond / 1000,
      ageInMinutes = ageInSeconds / 60,
      ageInHorse = ageInMinutes / 60,
      ageInDays = ageInHorse / 24,
      ageInYear = ageInDays / 365

    return ageInYear.toFixed()
  }

  static whoIsYounger(...workers) {
    //Используем метод Math.min() для получения минимального числа.
    // Методом map возвращаем минимальное число и записываем в переменную minAge
    let minAge = Math.min(...workers.map(worker => +worker.getAge()))
    // Проходимся методом фильтрации по обьекту и сравниваем возраст в обьекте с числом которое мы вернули в переменную minAge
    let minAgeWorker = workers.filter(worker => +worker.getAge() === minAge)

    // Проходимся циклом по массиву циклом и возвращаем строку с человеком который младше всех
    minAgeWorker.forEach(item => console.log(`${item.getFullName()} ${item.getAge()}`))
  }
}


let obj1 = new Worker('Max', 'Pastukh', '11-10-1995', 'FrontEnd')
obj1.addDays(10)
obj1.birthDay = '02-02-2004'
obj1.rate = 2000
console.log(obj1.getSalary())
console.log(obj1)

let obj2 = new Worker('Vadim', 'Pupkow', '01-12-2003', 'BeckEnd')
obj2.birthDay = '12-01-1999'
obj2.addDays(29)

let obj3 = new Worker('Alex', 'Kriptunow', '04-04-2001', 'WebDesing')
obj3.birthDay = '12-01-1988'
obj3.addDays(27)

let obj4 = new Worker('David', 'Ivanow', '07-11-2010', 'UI-UX')
obj4.birthDay = '12-01-1988'
obj4.addDays(22)



Worker.whoWorkerMore(obj1, obj2, obj3, obj4)
Worker.whoIsYounger(obj1, obj2, obj3, obj4)



