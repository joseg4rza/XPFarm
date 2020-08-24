const {berlinClock} =require ('../berlinClock.js')
//test1 de que corre
// it('should accept the correct 24h formatted input', () => {
//     expect(berlinClock('235235')).toBe('time');
// });

// //Test 2 Que podemos recibir valor
// it('should accept the correct 24h formatted input', () => {
//     expect(berlinClock('23:52:35')).toBe('35');
// });

//Test 3 Que podemos recibir y leer hora natural en 3 variables
// it('should accept the correct 24h formatted input', () => {
//     expect(berlinClock('23:52:35')).toBe('235235');
// });

//Test 4 Imprimir el reloj entero apagado, vaya, crear el reloj
// it('should accept the correct 24h formatted input', () => {
//     expect(berlinClock('23:52:35')).toBe("O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
// });

// //Test 5 Que podemos recibir y leer hora natural en 3 variables
// it('should accept the correct 24h formatted input', () => {
//     expect(berlinClock('23:52:35')).toBe("O\n");
// });

const {oneSecPanel} =require ('../berlinClock.js')
//Test 6(1) Que podemos recibir y mostrar los segundos
it('should accept the correct 24h formatted input, and identify the seconds, displaying the One-Second bub on or off', () => {
    expect(oneSecPanel('23:52:35')).toBe("O\n");
});

const {fiveHourPanel} =require ('../berlinClock.js')
//Test 6(1) Que podemos recibir y mostrar los segundos
it('should accept the correct 24h formatted input, and identify the hours, displaying the five-hour bulbs panel correctly', () => {
    expect(fiveHourPanel('23:52:35')).toBe("YYYY\n");
});