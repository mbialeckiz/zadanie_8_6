var a, b, value;

a= prompt("Wpisz wartość a");
b= prompt("Wpisz wartość b");

value=(a * a) + (2 * a * b) - (b * b);

console.log(value);

if (value>0) {
  console.log('Wynik dodatni')
} else if (value<0) {
  console.log('Wynik ujemny')
} else {
  console.log('Wynik jest równy zero')
}
