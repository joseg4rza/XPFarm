
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

const { oneSecPanel, twentyHourPanel, fourHourPanel, fiftyFiveMinPanel, fourMinPanel, berlinClock } =require ('../berlinClock.js')

it('Identify the seconds, displaying the One-Second Panel on or off', () => {
    expect(oneSecPanel('23:52:35')).toBe("O\n");
});

it('Identify the hours, displaying the twenty-hours panel', () => {
    expect(twentyHourPanel('23:52:35')).toBe("RRRR\n");
});

it('Identify the hours, displaying the four-hours panel', () => {
    expect(fourHourPanel('23:52:35')).toBe("RRRO\n");
});

it('Identify the minutes, displaying the fiftyfive-minutes panel', () => {
    expect(fiftyFiveMinPanel('23:52:35')).toBe("YYRYYRYYRYO\n");
});

it('Identify the minutes, displaying the four-minutes panel', () => {
    expect(fourMinPanel('23:52:35')).toBe("YYOO\n");
    expect(fourMinPanel('04:18:14')).toBe("YYYO\n");
    expect(fourMinPanel('04:03:14')).toBe("YYYO\n");
    expect(fourMinPanel('04:16:16')).toBe("YOOO\n");
    expect(fourMinPanel('04:19:19')).toBe("YYYY\n");
    expect(fourMinPanel('04:34:19')).toBe("YYYY\n");
    expect(fourMinPanel('04:30:19')).toBe("OOOO\n");
});

it('should accept the correct 24h formatted input, and display complete clock', () => {
    expect(berlinClock('23:52:35')).toBe("Y\nRRRR\nRRRO\nYYRYYRYYRYO\nYYOO");
    expect(berlinClock('22:46:29')).toBe("Y\nRRRR\nRROO\nYYRYYRYYROO\nYOOO");
    expect(berlinClock('00:00:00')).toBe("O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO"); 
});

