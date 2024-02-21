export class Person {
  #birthDay = '04-17-1996'

  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  get birthDay() {
    return `${this.#birthDay}`
  }
  set birthDay (days) {
    this.#birthDay = days
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
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

      return `Возраст человека ${ageInYear.toFixed()} лет`
  }
}



