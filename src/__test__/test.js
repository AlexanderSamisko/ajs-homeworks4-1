import healthStatus from '../app';

test.each([
  [
    {
      name: 'David',
      health: 55,
    },
    'healthy',
  ],
  [
    {
      name: 'Vaynard',
      health: 41,
    },
    'wounded',
  ],
  [
    {
      name: 'Enakin',
      health: 12,
    },
    'critical',
  ],
  [
    {
      name: 'Obscur',
    },
    'Character is otherwordly being or something went wrong, check his(her) status carefully',
  ],
  [
    {
      name: 'Zergushonok',
      health: 'zog-zagi',
    },
    'Character is otherwordly being or something went wrong, check his(her) status carefully',
  ],
])(
  ('testing health conditions %s characters'),
  (character, condition) => {
    const health = healthStatus(character);
    expect(health).toBe(condition);
  },
);
