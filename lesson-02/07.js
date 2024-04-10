// Ну и вишенка на торт: раз наш парень оказался «в нужное время в нужном месте», пора бы его женить):
// Под surname добавь married: true. И разумеется проверь, что женат только один парень… 
// (Т.е. необходимо создать глубокую копию объекта passportMarried , и добавить в него новый ключ: значение).

let passportMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
      country: "USA",
      city: "Bobryisk"
  }
};

let passportMarried2 = { ...passportMarried, married: true, address: { ...passportMarried.address } } 
passportMarried2.married = true;
 
console.log(passportMarried); 
console.log(passportMarried2);
