# clouseri_ejercicio2
1. Ejercicio principal

var feature = 'closures';
(function () {

if ( typeof feature === 'undefined' ){         
    var feature = 'callbacks';         
    console.log('JS coders love its ' + feature );     
} else {         
    console.log('JS developers love its ' + feature );     
}
})();

2.  El var declarado en la linea 8 hace que el interprete "Eleve" la variable 

3. Al eliminar el var de la linea 8 " feature"  ya el interprete ya no "Eleva" la variable es decir ya no es undefined asi imprimira el ELSE.
