function quad(a, b, c) {
    if (a == 0) return "Ошибка, а=0 недопустимое значение!";
    let D = b * b - 4 * a * c;
    let x1, x2;
    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return "Коэффициенты: a=" + a + ", b=" + b + ", c=" + c + "\nКорни уравнения: X1=" + x1 + ", X2=" + x2 +
            "\nДискриминант(D)=" + D;
    } else if (D == 0) {
        x1 = -b / (2 * a);
        return "Коэффициенты: a=" + a + ", b=" + b + ", c=" + c + "\nКорень уравнения: X=" + x1 + "\nДискриминант(D)=" + D;
    } else if (D < 0) return "Коэффициенты: a=" + a + ", b=" + b + ", c=" + c + "\nКорней нет!\nДискриминант(D)=" + D;
}
function prog() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let result = quad(a, b, c);
    document.getElementById('result').textContent = result;
    document.getElementById('otvet').style.display = 'block';
}