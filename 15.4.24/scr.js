//assign users to a global variable (for exersize 6)
const users = new Array(30);
fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(data => {
        let $users = data;
        // console.log($users);
        for (let i = 0; i < 30; i ++){
                users[i] = {
                    id: Math.floor(Math.random() * 899999999) + 100000000,
                    firstName: $users.users[i].firstName,
                    lastName: $users.users[i].lastName,
                    age: $users.users[i].age,
                    country: $users.users[i].address.state,
                    city: $users.users[i].address.city
                }
            };
    });

function Ex1 (){
    document.getElementById("result").innerHTML = "";
    for (let i = 12; i <= 24; i++){
        document.getElementById("result").innerHTML += `${i}<br>`
    }
}
function Ex2 (){
    document.getElementById("result").innerHTML = "";
    for (let i = 7; i <= 31; i ++){ 
        if (i % 2 != 0)
            document.getElementById("result").innerHTML += `${i}<br>`
    }
}
function Ex2_1(){
    document.getElementById("result").innerHTML = "";
    for (let i = 7; i <= 31; i = i+2){
        document.getElementById("result").innerHTML += `${i}<br>`
    }
}
function Ex3(){
    document.getElementById("result").innerHTML = "";
    let num = 10;
    while (num < 21){
        document.getElementById("result").innerHTML += `${num}<br>`
        num = num + 2;
    }
}
function Ex4(){
    document.getElementById("result").innerHTML = "";
    for (let i = 1; i < 46; i++ ){
        if (i % 3 == 0){
            if (i % 5 == 0)
                document.getElementById("result").innerHTML += `${i} FizzBuzz <br>`
            else
            document.getElementById("result").innerHTML += `${i} Buzz <br>`
        }
        else{
            if (i % 5 == 0)
            document.getElementById("result").innerHTML += `${i} Fizz <br>`
            else
            document.getElementById("result").innerHTML += `${i}<br>`
        }
    }
}
function Ex5 ($arr){
    document.getElementById("result").innerHTML = "";
    let sum = 0;
    $arr.forEach(element => {
        sum = sum + element;
        document.getElementById("result").innerHTML += `adding ${element}, sum is ${sum}<br>`
    });
}
function Ex6(users){
    document.getElementById("result").innerHTML = "";
    property = prompt('Please enter a search parameter (name/last name/age/id)')
    users.forEach((obj, index) => {
        // console.log(obj)
        let flag = 0;
        for (let i in obj){
            if (obj[i] == property){
            document.getElementById("result").innerHTML +=
                `Found a match in index ${index}:${i} : ${obj[i]}<br>
                Deleting match...`
            // console.log(i)
            flag = i
            }
        }
    if (flag != 0)
        delete obj[flag];        
    })
}
function Ex6_1(users){
    document.getElementById("result").innerHTML = "";
    users.forEach(obj => {
        for (let key in obj){
            document.getElementById("result").innerHTML += key + ":" + obj[key] + "<br>";
        }
    })
}
function Ex7(){
    document.getElementById("result").innerHTML = "";
    const ourPets = [
        {
        animalType: "cat",
        names: [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
        ]
        },
        {
        animalType: "dog",
        names: [
        "Spot",
        "Bowser",
        "Frankie"
        ]
        }
        ];
        document.getElementById("result").innerHTML = "Answer A is:" + 
            ourPets[0].animalType + "<br>" + "answer B is:" + ourPets[1].names;
}
const student = {
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    };
    
function Ex8_1(){
    document.getElementById("result").innerHTML = "";
    for (prop in student){
        
        if (typeof student[prop] != 'object')
            document.getElementById("result").innerHTML += prop+": "+student[prop]+"<br>";
        else
        for (let i in student[prop])
            document.getElementById("result").innerHTML += `Hobby${1+parseInt(i)}: ${student[prop][i]}<br>`;
    }
}
function Ex8_2(student){
    document.getElementById("result").innerHTML = "";
    let hobby = prompt("Please enter a hoby:")
    student.hobbies.push(hobby)
}
function Ex8_4(student){
    document.getElementById("result").innerHTML = "";
    let hobby = prompt("Please enter a hoby:")
    for (let i in student.hobbies){
        const flag = student.hobbies[student.hobbies.length - 1]
        let test = student.hobbies.shift()
        if (test != hobby){
            student.hobbies.push(test)
            if (test == flag)
                break
        }
    }
}
function Ex8_6(student){
    document.getElementById("result").innerHTML = "";
    student.LastName = "Smith";
    document.getElementById("result").innerHTML = `Added last name: ${student.LastName}`;
}
function Ex9(){
    document.getElementById("result").innerHTML = "";
    const arr = [[1,2],[3,4],[5,6]];
    for (i = 0; i < arr.length; i++)
        for (j = 0; j < 2; j++)
            document.getElementById("result").innerHTML += (arr[i][j]) + "<br>";
}
function Ex10(arr){
    document.getElementById("result").innerHTML = "";
    let counter = 0;
    for (let i in arr){
        for (let j = 0; j < arr[i].length; j++){
            if (arr[i][j] === 0)
                counter ++;
        }
    }
    document.getElementById("result").innerHTML += (counter) + "<br>";
}
function Ex11(arr){
    document.getElementById("result").innerHTML = "";
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            if (arr[i] === arr[j]){
                document.getElementById("result").innerHTML += (arr[j]) + "<br>";
                arr[j] = NaN;
                break;
            }
        }
    }
}
function Ex12(arr){
    document.getElementById("result").innerHTML = "";
    const arr2 = [];
    for (let i in arr)
        arr2.unshift(arr[i]);
        document.getElementById("result").innerHTML = arr + "<br>" + arr2;
}
function Ex13(arr1, arr2){
    document.getElementById("result").innerHTML = "";
    const arrsum = new Array(arr1.length);
    for (let i in arr1){
        arrsum[i] = arr1[i] + arr2[i];
    }
    document.getElementById("result").innerHTML = `
    arr1 is: ${arr1}<br>
    arr2 is: ${arr2}<br>
    The sum of the arrays is: ${arrsum}`
}
function Ex14(){
    document.getElementById("result").innerHTML = "";
    const chars = [];
    const chars2 = [];
    let str = prompt("please enter a string");
    let result =`${str} is a palindrome`;
    for (let i = 0; i < str.length; i++){
        chars[i] = str.at(str.length - i - 1);
        chars2[i] = str.charAt(i);
    }
    for (let i in chars){
        if (chars[i] !== chars2[i])
            result = `${str} is not a palindrome`
        }    
        document.getElementById("result").innerHTML = result;
}
function Ex15(){
    document.getElementById("result").innerHTML = "";
    let counter = 1;
    while (counter < 100){
        counter *= 2;
        document.getElementById("result").innerHTML += counter + "<br>";
    }
}
function Ex16(){
    document.getElementById("result").innerHTML = "";
    let counter = 900000;
    while (counter > 50){
        counter /= 2;
        document.getElementById("result").innerHTML += counter + "<br>";
    }
}
function Ex17(){
    document.getElementById("result").innerHTML = "";
    let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
    let copiedNames = [];
    let index = 0;
    while (index < names.length) {
        copiedNames[index] = names[index];
        index ++;
    }
    document.getElementById("result").innerHTML = copiedNames;
}
function Ex18(){
    document.getElementById("result").innerHTML = "";
    let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
    let copiedNames = [];
    let index = 0;
    while (index < names.length) {
        if (names[index] === 'Pete')
            break;
        copiedNames[index] = names[index];
        index ++;
    }
    document.getElementById("result").innerHTML = copiedNames;
}
function Ex19(){
    document.getElementById("result").innerHTML = "";
    // let array= [true, false, false, true, true, false];
    // let array= [true, false, true, false, true, true];
    let array= [true, false, true, false, true, false];
    document.getElementById("result").innerHTML = array + "<br>";
    let i = 0;
    while (i < array.length && i !== -1){
        i ++;
        if (array[i] === array[i-1]){
            document.getElementById("result").innerHTML += i;
            break;
        }
        else {
            if (i === array.length - 1)
                i = -1;
        }
    console.log(i)
    }
    document.getElementById("result").innerHTML += i;
}

