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
it('should accept the correct 24h formatted input', () => {
    expect(berlinClock('23:52:35')).toBe('235235');
});