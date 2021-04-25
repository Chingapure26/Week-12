import * as functions from './functions'; 

test ('Sum of two values', () => {
    expect (functions.suma(2,2)).toBe(4);
});


test ('Subtraction of two values', () => {
    expect (functions.resta(4,2)).toBe(2);
});

test ('multiplication of two values', () => {
    expect (functions.multiplicacion(4,2)).toBe(8);
});

test ('division of two values', () => {
    expect (functions.division(4,0)).toBe(2);
});
    
test ('division of two values', () => {
    expect (functions.division(4,2)).toBe(2);
});

test ('exponential', () => {
    expect (functions.potencia(2,3)).toBe(8);
});


test ('sum of squares', () => {
    expect (functions.anidada(3,5)).toBe(34);
});

test ('text', () => {
    expect (functions.texto('Helloword')).toMatch(/Helloword/);
});

