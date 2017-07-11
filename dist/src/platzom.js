"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
function platzom(str) {

    var translation = str;

    // si la palabra termina en "ar", se le quitan esos caracteres

    if (str.toLowerCase().endsWith("ar")) {

        translation = str.slice(0, -2);
    }

    //si la palabra inicia con Z , se añade una "pe" al final

    if (str.toLowerCase().startsWith("z")) {
        translation += "pe";
    }
    //si la palabra traducida tiene 10 o mas letras se deve separar con un -
    var length = translation.length;
    if (length >= 10) {
        var firstHalf = translation.slice(0, Math.round(length / 2));
        var secondHalf = translation.slice(Math.round(length / 2));

        translation = firstHalf + "-" + secondHalf;
    }
    //si la palabra es un palindromo
    //ninguna regla anterior cuenta y devuelve
    // la palabra intercalando mayusculas y minusculas

    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };

    function minMay(str) {
        var length = str.length;
        var translation = '';
        var capitaliza = true;

        for (var i = 0; i < length; i++) {
            var char = str.charAt(i);
            translation += capitaliza ? char.toUpperCase() : char.toLowerCase();
            capitaliza = !capitaliza;
        }
        return translation;
    }

    if (str == reverse(str)) {

        return minMay(str);
    }

    return translation;
}