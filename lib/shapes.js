class shapes {
constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="transparent" /><${this.shapeSyn} fill="${this.shapeColor}" /><text ${this.textCorX} ${this.textCorY} font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`  
}
}

class circle extends shapes {
    constructor(text, textColor, shapeColor, shapeSyn, textCorX, textCorY) {
    super(text, textColor, shapeColor)
    this.shapeSyn = 'circle cx="160" cy="100" r="80"'
    this.textCorX = 'x="160"'
    this.textCorY = 'y="120"'
}
}

class triangle extends shapes {
    constructor(text, textColor, shapeColor, shapeSyn, textCorX, textCorY) {
        super(text, textColor, shapeColor)
        this.shapeSyn = 'polygon points="150, 18 244, 182 56, 182"'
        this.textCorX = 'x="150"'
        this.textCorY = 'y="150"'
    }
}

class square extends shapes {
    constructor(text, textColor, shapeColor, shapeSyn, textCorX, textCorY) {
        super(text, textColor, shapeColor)
        this.shapeSyn = 'rect x="75" y="25" width="150" height="150"'
        this.textCorX = 'x="150"'
        this.textCorY = 'y="120"'
    }
}

module.exports = { shapes, circle, triangle, square}