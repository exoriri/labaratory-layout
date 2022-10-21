
const c = 10;

function sum(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2, number3) {
    return number1 * number2 * number3;
}

function personsAge(person1, person2) {
    if (person1 > person2) {
        return 'Person1 старше, чем person2'
    } else if(person1 === person2) {
        return 'Person1 и Person2 ровесники';
    } else {
        return 'Person1 младше, чем person2'
    }
};

//1) Вывести сумму всех возрастов людей, которые изучают python и изучают javascript
const peopleJs = [{ name: 'Roma', age: 25 }, { name: 'Yanis', age: 30 }, { name: 'Vasya', age: 45 }];
const peoplePython = [{ name: 'Margarita', age: 20 }, { name: 'Egor', age: 33 }, { name: 'Ivan', age: 50 }];

//2) Создать функцию, которая принимает двух людей и выводит их сумму возрастов
function ageSum(person1, person2) {

}

//3) Создать массив, который будет содержать горы (объект) с высотой и названием

//4) Создать функцию, которая будет принимать две горы и выводит в консоль какая гора выше, а какая ниже

