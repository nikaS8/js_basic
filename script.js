/**
 * Почему код даёт именно такие результаты?
 */

var a = 1, b = 1, c, d;

// c = 2, т.к приоритет префиксного инкримента выше, чем =
c = ++a; alert(c);

// d = 1, приоритет = выше, чем постфиксный инкримент
d = b++; alert(d);

// с = 5, сначала действие с префиксным инкриментом, затем сложение, после приравнивание
c = (2 + ++a); alert(c);

// d = 4, сначала сложение, затем приравнивание, в конце действие с префиксным инкриментом 
d = (2 + b++); alert(d);

// 3
alert(a);

//3
alert(b);


/**
 * Чему будет равен x в примере ниже?
 */

 var a = 2;
 var x = 1 + (a *= 2);

 // x = 5, сначала а * 2 = 4, затем 4 + 1 = 5
 alert(`x = ${x}`);

