

// let a=new Matrix(2, 3);
// let b=new Matrix(2, 3);
// console.table(a.data);
// console.table(b.data);
// console.table(Matrix.multiply(a, b).data)

let brain=new NeuralNetwork(2, 2, 1);
let input=[1, 0];
let output=brain.feedforward(input);
console.log(output);