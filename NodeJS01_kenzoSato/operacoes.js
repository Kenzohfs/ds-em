module.exports.adicao = (num1, num2) => {
    return num1 + num2;
}

module.exports.subtracao = (num1, num2) => {
    return num1 - num2;
}

module.exports.multiplicacao = (num1, num2) => {
    return num1 * num2;
}

module.exports.divisao = (num1, num2) => {
    if (num2 == 0)
        return "Não é possível dividir por zero";
    return num1 / num2;
}

module.exports.bhaskara = (a, b, c) => {
    if (a == 0)
        return "Não é possível calcular a equação de segundo grau";
    return { 
        x1: (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a),
        x2: (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a),
    };
}

module.exports.teoremaPitagoras = (a, b) => {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

module.exports.areaTriangulo = (base, altura) => {
    return (base * altura) / 2;
}

module.exports.perimetroCirculo = (raio) => {
    return 2 * Math.PI * raio;
}

module.exports.volumeCubo = (lado) => {
    return Math.pow(lado, 3);
}

module.exports.volumeCilindro = (raio, altura) => {
    return Math.PI * Math.pow(raio, 2) * altura;
}