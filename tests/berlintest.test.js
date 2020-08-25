
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
it('Identify the seconds, displaying the One-Second Panel on or off', () => {
    expect(oneSecPanel('23:52:35')).toBe("O\n");
});

const {twentyHourPanel} =require ('../berlinClock.js')
it('Identify the hours, displaying the twenty-hours panel', () => {
    expect(twentyHourPanel('23:52:35')).toBe("RRRR\n");
});
const {fourHourPanel} =require ('../berlinClock.js')
it('Identify the hours, displaying the four-hours panel', () => {
    expect(fourHourPanel('23:52:35')).toBe("RRRO\n");
});
const {fiftyFiveMinPanel} =require ('../berlinClock.js')
it('Identify the minutes, displaying the fiftyfive-minutes panel', () => {
    expect(fiftyFiveMinPanel('23:52:35')).toBe("YYRYYRYYRYO\n");
});
const {fourMinPanel} =require ('../berlinClock.js')
it('Identify the minutes, displaying the four-minutes panel', () => {
    expect(fourMinPanel('12:56:01')).toBe("YOOO");
});

// const {berlinClock} =require ('../berlinClock.js')
// it('should accept the correct 24h formatted input, and display complete clock', () => {
//     expect(berlinClock('12:56:01')).toBe("Y\nRROO\nRROO\nYYRYYRYYRYY\nYOOO");
// });