const { oneSecPanel, twentyHourPanel, fourHourPanel, fiftyFiveMinPanel, fourMinPanel, berlinClock } =require ('../berlinClock.js')

it('Identify the seconds, displaying the One-Second Panel on or off', () => {
    expect(oneSecPanel('23:52:35')).toBe("O\n");
    expect(oneSecPanel('23:52:36')).toBe("Y\n");
    expect(oneSecPanel('03:22:13')).toBe("O\n");
    expect(oneSecPanel('02:12:30')).toBe("Y\n");
    expect(oneSecPanel('02:12:49')).toBe("O\n");
    expect(oneSecPanel('02:12:01')).toBe("O\n");
    expect(oneSecPanel('02:12:23')).toBe("O\n");
    expect(oneSecPanel('02:12:24')).toBe("Y\n");
});

it('Identify the hours, displaying the twenty-hours panel', () => {
    expect(twentyHourPanel('00:52:35')).toBe("OOOO\n");
    expect(twentyHourPanel('20:52:35')).toBe("RRRR\n");
    expect(twentyHourPanel('03:52:35')).toBe("OOOO\n");
    expect(twentyHourPanel('11:52:35')).toBe("RROO\n");
});

it('Identify the hours, displaying the four-hours panel', () => {
    expect(fourHourPanel('23:52:35')).toBe("RRRO\n");
    expect(fourHourPanel('11:52:35')).toBe("ROOO\n");
    expect(fourHourPanel('00:52:35')).toBe("OOOO\n");
    expect(fourHourPanel('01:52:35')).toBe("ROOO\n");
    expect(fourHourPanel('14:52:35')).toBe("RRRR\n");
   
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
    //expect(berlinClock('00:00:00')).toBe("Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    expect(berlinClock('22:46:29')).toBe("RRRR\nRROO\nYYRYYRYYROO\nYOOO");
    //expect(berlinClock('23:52:35')).toBe("O\nRRRR\nRRRO\nYYRYYRYYRYO\nYYOO");
    
    //expect(berlinClock('00:00:00')).toBe("OOOO\n"); 
});

