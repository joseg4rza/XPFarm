const {berlinClock} =require ('../berlinClock.js')
it('should accept the correct 24h formatted input', () => {
    expect(berlinClock('235235')).toBe(false);
});

//Test 2
it('should accept the correct 24h formatted input', () => {
    expect(berlinClock('235235')).toBe(false);
});