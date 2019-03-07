const test = require('tape');
const hexOpacity = require('../index.ts');

test('hexOpacity.add', (t) => {
  t.plan(5)

  t.equal(hexOpacity.add('#fff'), '#FFF');
  t.equal(hexOpacity.add('#fffFFF'), '#FFFFFF');
  t.equal(hexOpacity.add('#000', 0.5), '#00000080');
  t.equal(hexOpacity.add('#1144b2', .3), '#1144B24D');
  t.equal(hexOpacity.add('#bbc867', 0.05), '#BBC8670D');
});

test('hexOpacity.androidAdd', (t) => {
  t.plan(5)

  t.equal(hexOpacity.androidAdd('#fff'), '#FFF');
  t.equal(hexOpacity.androidAdd('#fffFFF'), '#FFFFFF');
  t.equal(hexOpacity.androidAdd('#000', 0.5), '#80000000');
  t.equal(hexOpacity.androidAdd('#1144b2', .3), '#4D1144B2');
  t.equal(hexOpacity.androidAdd('#bbc867', 0.05), '#0DBBC867');
});
