function Punto(x, y) {
    this.x = x;
    this.y = y;
  }


  Punto.prototype.suma = function(punto) {
    const sumaX = this.x + punto.x;
    const sumaY = this.y + punto.y;
    return new Punto(sumaX, sumaY);
  };


  Punto.prototype.toString = function() {
    return `(${this.x},${this.y})`;
  };


  let p1 = new Punto(1, 2);
  let p2 = new Punto(2, 3);
  console.log(p1.suma(p2).toString());
