function sigmoid(a)
    {
        return 1/(1+Math.pow(Math.E, -a));
    }

class NeuralNetwork{

    constructor(input, hidden, output){

        this.input_nodes=input;
        this.hidden_nodes=hidden;
        this.output_nodes=output; 
        this.weights_ih=new Matrix(this.hidden_nodes, this.input_nodes);
        this.weights_ho=new Matrix(this.output_nodes, this.hidden_nodes);
        this.weights_ih.randomize(2, 1);
        this.weights_ho.randomize(2, 1);
        this.bias_h=new Matrix(this.hidden_nodes, 1);
        this.bias_o=new Matrix(this.output_nodes, 1);
        this.bias_h.randomize(2, 1);
        this.bias_o.randomize(2, 1);
         
    }

    

    feedforward(input_array)
    {
        let inputs = Matrix.fromArray(input_array);
        let hidden=Matrix.multiply(this.weights_ih, inputs);
       // this.weights_ho.print();
        hidden.add(this.bias_h);
        hidden.map(sigmoid);
        let output=Matrix.multiply(this.weights_ho, hidden);
        output.add(this.bias_o);
        output.map(sigmoid);

        return output.toArray();


        
    }


    train(inputs, targets)
    {
       let outputs=this.feedforward(inputs);
       let error=Matix.subtract(targets, outputs);
       outputs=Matrix.fromArray(outputs);
       targets=Matrix.fromArray(targets);
       let result=Matrix.subtract(targets, outputs);
    }

    


}