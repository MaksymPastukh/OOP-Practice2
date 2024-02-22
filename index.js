import {Worker} from "./modules/Worker.js";

document.addEventListener('DOMContentLoaded', () => {


  let person1 = new Worker('Ivan', 'Ivanov', '02-11-1995', 'Frontend Developer')
  let person2 = new Worker('Vadim', 'Petrov', '11-15-1987', 'Backend Developer')
  let person3 = new Worker('Max', 'Pastuh', '03-19-1964', 'Web Designer')
  let person4 = new Worker('Alex', 'Saptukow', '09-06-2002', 'UI UX Designer')
  let person5 = new Worker('Anna', 'Kravachenko', '09-06-2002', 'Designer')

  person1.rate = 2000
  person2.rate = 2000
  person3.rate = 2000
  person4.rate = 2000
  person5.rate = 2000

  person1.addDays(29)
  person2.addDays(29)
  person3.addDays(-1)
  person4.addDays(24)
  person5.addDays(20)


  console.log(`${person1.getFullName()} - заработал за этот месяц ${person1.getSalary()} рублей`)
  console.log(`${person2.getFullName()} - заработал за этот месяц ${person2.getSalary()} рублей`)
  console.log(`${person3.getFullName()} - заработал за этот месяц ${person3.getSalary()} рублей`)
  console.log(`${person4.getFullName()} - заработал за этот месяц ${person4.getSalary()} рублей`)
  console.log(`${person5.getFullName()} - заработала за этот месяц ${person5.getSalary()} рублей`)

  Worker.whoWorkerMore(person1, person2, person3, person4, person5)
  Worker.whoIsYounger(person1, person2, person3, person4, person5)




})

