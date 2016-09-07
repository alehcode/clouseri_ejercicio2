var feature = 'closures'; 

(function () {     
    if ( typeof feature === 'undefined' ){         
        //var feature = 'callbacks';         
        document.write('JS coders love its ' + feature );     
    } else {         
        document.write('JS developers love its ' + feature );     
    }
})();