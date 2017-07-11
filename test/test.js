
const expect = require("chai").expect
const platzom = require("./")

describe("#platzom", function(){

	it("si la palabra termina en ar, se le quitan esos caracteres",function () {
		// body...
		const traslsation = platzom("Programar")
		expect(translation).to.equal("Program")
	})


	it("si la palabra inicia con Z , se añade una pe al final",function () {
		// body...
	})


	it("si la palabra traducida tiene 10 o mas letras se deve separar con un -",function () {
		// body...
	})


	it("si la palabra es un palindromo  ninguna regla anterior cuenta y devuelve la palabra intercalando mayusculas y minusculas",function () {
		// body...
	})
})
