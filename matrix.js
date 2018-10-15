class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = [];

    for (let i = 0; i < this.rows; i++) {
      this.data[i] = [];
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = 0;
      }
    }
  }

  add(n) {
    if (n instanceof Matrix) {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] += n.data[i][j];
        }
      }
    } else {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] += n;
        }
      }
    }
  }

  multiply(n) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] *= n;
      }
    }
  }

  static multiply(mA, mB) {
    if (mA.cols !== mB.rows) {
      console.log(mA.cols + " " + mB.rows);
      return undefined;
    }
    let result = new Matrix(mA.rows, mB.cols);
    let a = mA.data;
    let b = mB.data;

    for (let i = 0; i < result.rows; i++) {
      for (let j = 0; j < result.cols; j++) {
        for (let k = 0; k < mB.rows; k++) {
          result.data[i][j] += a[i][k] * b[k][j];
          //console.log(a[i][k]+" "+b[k][i])
        }
      }
    }

    return result;
  }

  randomize(v1, v2) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = Math.random() * v1 - v2;
      }
    }
  }

  transpose() {
    let result = new Matrix(this.cols, this.rows);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        result[j][i] += this.data[i][j];
      }
    }

    return result;
  }

  map(toApply) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = toApply(this.data[i][j]);
      }
    }
  }

  static fromArray(inp) {
    let results = new Matrix(inp.length, 1);
    for (let i = 0; i < results.length; i++) {
      results.data[i][0] = inp[i];
    }

    return results;
  }

  toArray() {
    let result = [];

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        result.push(this.data[i][j]);
      }
    }

    return result;
  }

  static subtract(a, b) {
    let result = new Matrix(a.rows, a.cols);
    for (let i = 0; i < a.rows; i++) {
      for (let j = 0; j < a.cols; j++)
        result.data[i][j] = a.data[i][j] - b.data[i][j];
    }

    return result;
  }

  print() {
    console.table(this.data);
  }
}
