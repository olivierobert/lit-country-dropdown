import {LitCountryDropdown} from '../lit-country-dropdown.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('lit-country-dropdown', () => {
  test('is defined', () => {
    const el = document.createElement('lit-country-dropdown');
    assert.instanceOf(el, LitCountryDropdown);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<lit-country-dropdown></lit-country-dropdown>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<lit-country-dropdown name="Test"></lit-country-dropdown>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = (await fixture(html`<lit-country-dropdown></lit-country-dropdown>`)) as LitCountryDropdown;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });
});
