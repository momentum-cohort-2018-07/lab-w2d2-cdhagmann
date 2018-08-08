// 1. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(numbers) {
    var output = 0;
    for (var number of numbers) {
        output += number;
    }
    return output;
}

// 2. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(numbers) {
    if (numbers.length === 0) {
        return;
    }

    return sum(numbers) / numbers.length;
}

// 3. Create a function called "intersection" that takes two arrays and
// returns a new array that contains the elements found in both arrays.
// The order they are in does not matter, but no duplicates should be
// in the returned array, even if they were in the input.

function intersection(array1, array2) {
    var output = [];
    for (var current of array1) {
        if (array2.includes(current) && !output.includes(current)) {
            output.push(current);
        }
    }
    return output;
}

// 4. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(numbers) {
    var min = numbers[0];
    for (var number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}

// 5. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

function selectionSort(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        var min = minimum(numbers.slice(i, numbers.length));
        numbers[numbers.indexOf(min)] = numbers[i];
        numbers[i] = min;
    }
    return numbers;
}

// 6. Create a function called "createUser" that takes a name and a Date object
// and returns an object with the keys "name" and "dob" (date of birth) with
// those values.

function createUser(name, birthDate) {
    return {
        name: name,
        dob: birthDate
    };
}

// 7. Create a function called "calculateAge" that takes a user created from
// createUser and a Date object considered the current date, and calculates the user's
// age in years on that date. You can use your code from yesterday's homework.

function calculateAge(user, currentDate) {
    var birthDate = user.dob;

    if (currentDate === undefined) {
        currentDate = new Date();
    }

    if (birthDate > currentDate) {
        return;
    }

    var age = currentDate.getFullYear() - birthDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var birthMonth = birthDate.getMonth();

    if (currentMonth < birthMonth) {
        return age - 1;
    } else if (currentMonth > birthMonth) {
        return age;
    } else if (currentDate.getDate() < birthDate.getDate()) {
        return age - 1;
    } else {
        return age;
    }
}

// 8. Create a function called "addAge" that takes a user created from createUser
// and a Date object and adds a new key on the user object, "age", with the age
// in years the user was on that date.

function addAge(user, currentDate) {
    user.age = calculateAge(user, currentDate);
}

// 9. Create a function called "createUsers" that takes two arrays of equal
// length, the first being a list of names and the second being a list of dates of
// birth, and returns a new array of objects created from those original arrays.

function createUsers(names, birthDates) {
    if (names.length !== birthDates.length) {
        return;
    }

    var output = [];

    for (var idx = 0; idx < names.length; idx++) {
        output.push(createUser(names[idx], birthDates[idx]));
    }
    return output;
}

// 10. Create a function called "averageAge" that takes an array of users and
// a Date object and returns the average age in years of the users on that date.
// You do not have to handle the situation in which the current date is before
// a user's date of birth.

function averageAge(users, currentDate) {
    var ages = [];
    for (var user of users) {
        ages.push(calculateAge(user, currentDate));
    }

    return average(ages);
}