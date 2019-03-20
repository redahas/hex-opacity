const test = require('tape');
const hexOpacity = require('../index.ts');

test('hexOpacity.create', (t) => {
  t.plan(5)

  t.equal(hexOpacity.create('#fff'), '#FFFFFFFF');
  t.equal(hexOpacity.create('#fffFFF'), '#FFFFFFFF');
  t.equal(hexOpacity.create('#000', 0.5), '#00000080');
  t.equal(hexOpacity.create('#1144b2', .3), '#1144B24D');
  t.equal(hexOpacity.create('#bbc867', 0.05), '#BBC8670D');
});

test('hexOpacity.create for Android', (t) => {
  t.plan(5)

  t.equal(hexOpacity.create('#fff', undefined, true), '#FFFFFFFF');
  t.equal(hexOpacity.create('#fffFFF', undefined, true), '#FFFFFFFF');
  t.equal(hexOpacity.create('#000', 0.5, true), '#80000000');
  t.equal(hexOpacity.create('#1144b2', .3, true), '#4D1144B2');
  t.equal(hexOpacity.create('#bbc867', 0.05, true), '#0DBBC867');
});
