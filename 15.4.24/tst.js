const users = new Array(5)
for (i = 0; i < 5; i ++){
    fetch(`https://dummyjson.com/user/${i}`)
    .then(res => res.json())
    .then(assign => {
        users[i] = {
            id: Math.floor(Math.random() * 899999999) + 100000000,
            firstName: assign.firstName,
            lastName: assign.lastName,
            age: assign.age,
            country: assign.address.state,
            city: assign.address.city
        }
    });
}