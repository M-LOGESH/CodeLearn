// C Programs
const c = {
  "sum-of-two-numbers": {
    code: `#include <stdio.h>
int main() {
    int a, b;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    printf("Sum = %d", a + b);
    return 0;
}`,
    result: `Enter two numbers: 3 5
Sum = 8`,
  },
  "palindrome-check": {
    code: `#include <stdio.h>
int main() {
    int n, rev = 0, temp;
    printf("Enter a number: ");
    scanf("%d", &n);
    temp = n;
    while (n != 0) {
        rev = rev * 10 + n % 10;
        n /= 10;
    }
    if (temp == rev)
        printf("Palindrome");
    else
        printf("Not Palindrome");
    return 0;
}`,
    result: `Enter a number: 121
Palindrome`,
  },
  "factorial": {
    code: `#include <stdio.h>
int main() {
    int n, i, fact = 1;
    printf("Enter a number: ");
    scanf("%d", &n);
    for (i = 1; i <= n; i++) fact *= i;
    printf("Factorial = %d", fact);
    return 0;
}`,
    result: `Enter a number: 5
Factorial = 120`,
  },
  "prime-number": {
    code: `#include <stdio.h>
int main() {
    int n, i, isPrime = 1;
    printf("Enter a number: ");
    scanf("%d", &n);
    for (i = 2; i <= n/2; i++)
        if (n % i == 0) isPrime = 0;
    if (isPrime) printf("Prime number");
    else printf("Not a prime number");
    return 0;
}`,
    result: `Enter a number: 7
Prime number`,
  },
  "fibonacci-series": {
    code: `#include <stdio.h>
int main() {
    int n, t1 = 0, t2 = 1, nextTerm;
    printf("Enter number of terms: ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        printf("%d ", t1);
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
    }
    return 0;
}`,
    result: `Enter number of terms: 5
0 1 1 2 3`,
  },
  "swap-two-numbers": {
    code: `#include <stdio.h>
int main() {
    int a, b, temp;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    temp = a; a = b; b = temp;
    printf("After swapping: a=%d, b=%d", a, b);
    return 0;
}`,
    result: `Enter two numbers: 4 9
After swapping: a=9, b=4`,
  },
  "reverse-string": {
    code: `#include <stdio.h>
#include <string.h>
int main() {
    char str[100];
    printf("Enter a string: ");
    gets(str);
    strrev(str);
    printf("Reversed: %s", str);
    return 0;
}`,
    result: `Enter a string: hello
Reversed: olleh`,
  },
  "armstrong-number": {
    code: `#include <stdio.h>
#include <math.h>
int main() {
    int num, sum = 0, temp, digits;
    printf("Enter a number: ");
    scanf("%d", &num);
    temp = num;
    digits = (int)log10(num) + 1;
    while (temp) {
        sum += pow(temp % 10, digits);
        temp /= 10;
    }
    if(sum == num) printf("Armstrong Number");
    else printf("Not Armstrong Number");
    return 0;
}`,
    result: `Enter a number: 153
Armstrong Number`,
  },
  "gcd-of-two-numbers": {
    code: `#include <stdio.h>
int main() {
    int a, b, i, gcd;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    for(i=1;i<=a && i<=b;i++)
        if(a%i==0 && b%i==0) gcd=i;
    printf("GCD = %d", gcd);
    return 0;
}`,
    result: `Enter two numbers: 12 18
GCD = 6`,
  },
  "leap-year-check": {
    code: `#include <stdio.h>
int main() {
    int year;
    printf("Enter year: ");
    scanf("%d", &year);
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
        printf("Leap year");
    else
        printf("Not a leap year");
    return 0;
}`,
    result: `Enter year: 2024
Leap year`,
  },
};

// HTML Programs
const html = {
  "html-basics": {
    code: `<html>
<head><title>HTML Basics</title></head>
<body>
<h1>Hello World</h1>
<p>This is a basic HTML page.</p>
</body>
</html>`,
    result: `Renders:
Hello World
This is a basic HTML page.`,
  },
  "headings-paragraphs": {
    code: `<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<p>This is a paragraph.</p>`,
    result: `Renders headings and paragraph as written.`,
  },
  "lists": {
    code: `<ul>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ul>`,
    result: `Renders a bulleted list with 3 items.`,
  },
  "links-images": {
    code: `<a href="https://example.com">Example Link</a>
<img src="image.jpg" alt="Sample Image">`,
    result: `Renders a link and an image.`,
  },
  "tables": {
    code: `<table border="1">
<tr><th>Name</th><th>Age</th></tr>
<tr><td>John</td><td>25</td></tr>
</table>`,
    result: `Renders a table with Name and Age columns.`,
  },
  "forms": {
    code: `<form>
<input type="text" name="name" placeholder="Name">
<input type="submit" value="Submit">
</form>`,
    result: `Renders a form with text input and submit button.`,
  },
  "semantic-tags": {
    code: `<header>Header</header>
<nav>Navigation</nav>
<footer>Footer</footer>`,
    result: `Renders header, navigation, and footer sections.`,
  },
  "audio-video": {
    code: `<audio controls src="audio.mp3"></audio>
<video controls src="video.mp4"></video>`,
    result: `Renders audio and video players.`,
  },
  "html5-apis": {
    code: `<canvas id="myCanvas"></canvas>
<script>var c=document.getElementById("myCanvas");</script>`,
    result: `Renders a blank canvas element.`,
  },
  "canvas": {
    code: `<canvas id="canvas" width="200" height="100" style="border:1px solid #000000;"></canvas>`,
    result: `Renders a 200x100 canvas with border.`,
  },
};

// JavaScript Programs
const javascript = {
  "variables-data-types": {
    code: `let name = "John";
const age = 25;
var isStudent = true;`,
    result: `No visible output (variables declared)`,
  },
  "operators": {
    code: `let sum = 5 + 10;
let product = 5 * 10;`,
    result: `No visible output (just calculation)`,
  },
  "functions": {
    code: `function greet(name) {
return "Hello " + name;
}
console.log(greet("Alice"));`,
    result: `Hello Alice`,
  },
  "conditionals": {
    code: `let num = 10;
if (num > 0) console.log("Positive");
else console.log("Non-positive");`,
    result: `Positive`,
  },
  "loops": {
    code: `for(let i=0;i<5;i++){
console.log(i);
}`,
    result: `0
1
2
3
4`,
  },
  "arrays": {
    code: `let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);`,
    result: `apple`,
  },
  "objects": {
    code: `let person = {name: "John", age: 25};
console.log(person.name);`,
    result: `John`,
  },
  "dom-manipulation": {
    code: `document.getElementById("demo").innerHTML = "Hello World";`,
    result: `Changes element with id "demo" to "Hello World"`,
  },
  "events": {
    code: `document.getElementById("btn").addEventListener("click", function(){
alert("Button clicked!");
});`,
    result: `Alerts "Button clicked!" when button is clicked`,
  },
  "es6-features": {
    code: `const arr = [1,2,3];
const doubled = arr.map(n => n*2);
console.log(doubled);`,
    result: `[2,4,6]`,
  },
};

// Python Programs
const python = {
  "hello-world": {
    code: `print("Hello World")`,
    result: `Hello World`,
  },
  "sum-of-two-numbers": {
    code: `a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
print("Sum =", a + b)`,
    result: `Enter first number: 3
Enter second number: 5
Sum = 8`,
  },
  "factorial": {
    code: `n = int(input("Enter a number: "))
fact = 1
for i in range(1, n+1):
    fact *= i
print("Factorial =", fact)`,
    result: `Enter a number: 5
Factorial = 120`,
  },
  "fibonacci-series": {
    code: `n = int(input("Enter number of terms: "))
a, b = 0, 1
for _ in range(n):
    print(a, end=" ")
    a, b = b, a+b`,
    result: `Enter number of terms: 5
0 1 1 2 3`,
  },
  "palindrome-check": {
    code: `n = input("Enter a number: ")
if n == n[::-1]:
    print("Palindrome")
else:
    print("Not Palindrome")`,
    result: `Enter a number: 121
Palindrome`,
  },
  "prime-number": {
    code: `n = int(input("Enter a number: "))
is_prime = True
for i in range(2, n):
    if n % i == 0:
        is_prime = False
        break
print("Prime" if is_prime else "Not Prime")`,
    result: `Enter a number: 7
Prime`,
  },
  "armstrong-number": {
    code: `n = int(input("Enter a number: "))
sum = 0
temp = n
digits = len(str(n))
while temp > 0:
    sum += (temp % 10) ** digits
    temp //= 10
print("Armstrong" if sum == n else "Not Armstrong")`,
    result: `Enter a number: 153
Armstrong`,
  },
  "reverse-string": {
    code: `s = input("Enter a string: ")
print("Reversed:", s[::-1])`,
    result: `Enter a string: hello
Reversed: olleh`,
  },
  "gcd-of-two-numbers": {
    code: `import math
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
print("GCD =", math.gcd(a, b))`,
    result: `Enter first number: 12
Enter second number: 18
GCD = 6`,
  },
  "leap-year-check": {
    code: `year = int(input("Enter year: "))
if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print("Leap year")
else:
    print("Not a leap year")`,
    result: `Enter year: 2024
Leap year`,
  },
};

// SQL Programs
const sql = {
  "create-database": {
    code: `CREATE DATABASE mydatabase;`,
    result: `Query OK, database created`,
  },
  "create-table": {
    code: `CREATE TABLE students (
id INT PRIMARY KEY,
name VARCHAR(50),
age INT
);`,
    result: `Query OK, table created`,
  },
  "insert-data": {
    code: `INSERT INTO students (id, name, age) VALUES (1, 'John', 25);`,
    result: `Query OK, 1 row inserted`,
  },
  "select-query": {
    code: `SELECT * FROM students;`,
    result: `id | name | age
1  | John | 25`,
  },
  "where-clause": {
    code: `SELECT * FROM students WHERE age > 20;`,
    result: `id | name | age
1  | John | 25`,
  },
  "update-query": {
    code: `UPDATE students SET age = 26 WHERE id = 1;`,
    result: `Query OK, 1 row updated`,
  },
  "delete-query": {
    code: `DELETE FROM students WHERE id = 1;`,
    result: `Query OK, 1 row deleted`,
  },
  "order-by": {
    code: `SELECT * FROM students ORDER BY age DESC;`,
    result: `id | name | age
1  | John | 25`,
  },
  "group-by": {
    code: `SELECT age, COUNT(*) FROM students GROUP BY age;`,
    result: `age | COUNT(*)
25  | 1`,
  },
  "joins": {
    code: `SELECT students.name, courses.name FROM students
JOIN courses ON students.id = courses.student_id;`,
    result: `name | name
John | Math`,
  },
};

// Export all
export default { c, html, javascript, python, sql };
