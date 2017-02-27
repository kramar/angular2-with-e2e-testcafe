import { Selector } from 'testcafe';

const firstValue = Selector('#firstValue');
const secondValue = Selector('#secondValue');
const sumButton = Selector('#sumButton');
const summary = Selector('#summary');

fixture `Getting Started`
  .page `http://localhost:3000/`;

test('My first test', async t => {
  await t
    .typeText(firstValue, '7', {replace: true})
    .typeText(secondValue, '5', {replace: true})
    .click(sumButton)
    .expect(summary.innerText).eql('12');
});
