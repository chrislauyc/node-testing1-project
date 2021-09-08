const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    utils.trimProperties(input);
    expect(input).toEqual(expected);
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input);
    expect(input).toBe(actual);
    expect(actual).toEqual(expected);
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    let input = [{integer:2},{integer:3},{integer:1}];
    let expected = 3;
    let actual = utils.findLargestInteger(input);
    expect(actual).toEqual(expected);
    input = [];
    expected = null;
    actual = utils.findLargestInteger(input);
    expect(actual).toEqual(expected);
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toBe(3);
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown();
    expect(counter.countDown()).toBe(2);
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown();//3
    counter.countDown();//2
    counter.countDown();//1
    const actual1 = counter.countDown();//0
    const actual2 = counter.countDown();//0
    expect(actual1).toBe(0);
    expect(actual2).toBe(0);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toEqual("summer");
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next();
    expect(seasons.next()).toEqual("fall");
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next();
    seasons.next();
    expect(seasons.next()).toEqual("winter");
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    expect(seasons.next()).toEqual("spring");
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    expect(seasons.next()).toEqual("summer");
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for(let i = 0; i < 39; i++){
      seasons.next();
    }
    expect(seasons.next()).toEqual("spring");
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(100)).toEqual(100);
    expect(focus.drive(100)).toEqual(200);
  })
  test('[16] driving the car uses gas', () => {
    let startTank = focus.tank;
    focus.drive(100);
    let endTank = focus.tank;
    expect(endTank).not.toEqual(startTank);

    expect(focus.drive(20*30-100)).toEqual(20*30);
    expect(focus.tank).toEqual(0);

  })
  test('[17] refueling allows to keep driving', () => {
    expect(focus.drive(20*30)).toEqual(20*30);
    expect(focus.tank).toEqual(0);
    focus.refuel(20)
    expect(focus.tank).toEqual(20);
    focus.drive(20*30);
    expect(focus.drive(20*30)).toEqual(20*30*2);
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    expect(focus.tank).toEqual(20);
    expect(focus.drive(100)).toEqual(100);
    focus.refuel(100);
    expect(focus.tank).toEqual(20);
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', () => {
    expect(utils.isEvenNumberAsync(2)).resolves.toBe(true);
  })
  test('[20] resolves false if passed an odd number', () => {
    expect(utils.isEvenNumberAsync(1)).rejects.toBe(false);
  })
})
