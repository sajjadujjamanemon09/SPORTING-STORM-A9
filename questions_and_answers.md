<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>- B: `ReferenceError: greetign is not defined`</b></summary>
<p>

#### Answer: ?

<i>Here "greeting" is a variable. but when i access it for "greetign" the variable is not define anywhere in this code. There is a typographical error where intended to declare a variable name</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>- C: `"12"`</b></summary>
<p>

#### Answer: ?

<i>In this code there is a sum function and the parameters is 'a' & 'b'. The value of the parameters 'a' is `1` this is a 'number' and the value of the parameters 'b' is `"2"` this is a 'string'.If one of the value is 'string' then JavaScript will concatenate these two values, resulting in the string `"12"`. </i>
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>- A: `['🍕', '🍫', '🥑', '🍔']`</b></summary>
<p>

#### Answer: ?

<i>There is 'food' is an array & 'info' is an object.They are two separate variables. 'info.favoriteFood' is initially reassigned its can't changes the value of the 'food' array.In JavaScript, reassigning a property of an object does not automatically change other variables or arrays that were originally assigned the same value.So the value of 'food' is unchanged </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>- B: `Hi there, undefined`</b></summary>
<p>

#### Answer: ?

<i>In this code 'sayHi' is a function, there is a parameter 'name', but when it call 'sayHi()' without passing any argument, name is undefined within the function.So the result is `Hi there, undefined`</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>- C: 3</b></summary>
<p>

#### Answer: ?

<i>In this code there is a 'forEach' loop. Ans the 'nums' array checks each element 'num' to see if it's truthy. In JavaScript, all numbers except '0' are considered truthy. So, for each element that is not '0', the count is incremented by 1. There are three elements in the 'nums' array (1, 2, and 3), so count ends up being 3, and the output is 3.</i>

</p>
</details>
