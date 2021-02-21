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
      <div class="country-dropdown">
        <select id="country" name="country" hidden>
          <option value="fr">France</option>
          <option value="th">Thailand</option>
        </select>

        <button type="button" class="country-dropdown__button">
          <div class="country-dropdown__option">
            <div class="country-dropdown__flag">🇫🇷</div>
            <div class="country-dropdown__name">France</div>
            <div class="country-dropdown__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
        </button>

        <div class="country-dropdown__popover country-dropdown__popover--hidden">
          <ul class="country-dropdown__list">
            <li class="country-dropdown__option" data-value="fr">
              <div class="country-dropdown__flag">🇫🇷</div>
              <div class="country-dropdown__name">France</div>
              <div class="country-dropdown__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </li>
            <li class="country-dropdown__option" data-value="th">
              <div class="country-dropdown__flag">🇹🇭</div>
              <div class="country-dropdown__name">Thailand</div>
              <div class="country-dropdown__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </li>
          </ul>
        </div>
        <slot></slot>
      </div>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<lit-country-dropdown name="location"></lit-country-dropdown>`);
    
    assert.shadowDom.equal(
      el,
      `
      <div class="country-dropdown">
        <select id="location" name="location" hidden>
          <option value="fr">France</option>
          <option value="th">Thailand</option>
        </select>

        <button type="button" class="country-dropdown__button">
          <div class="country-dropdown__option">
            <div class="country-dropdown__flag">🇫🇷</div>
            <div class="country-dropdown__name">France</div>
            <div class="country-dropdown__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
        </button>

        <div class="country-dropdown__popover country-dropdown__popover--hidden">
          <ul class="country-dropdown__list">
            <li class="country-dropdown__option" data-value="fr">
              <div class="country-dropdown__flag">🇫🇷</div>
              <div class="country-dropdown__name">France</div>
              <div class="country-dropdown__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </li>
            <li class="country-dropdown__option" data-value="th">
              <div class="country-dropdown__flag">🇹🇭</div>
              <div class="country-dropdown__name">Thailand</div>
              <div class="country-dropdown__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </li>
          </ul>
        </div>
        <slot></slot>
      </div>
    `
    );
  });

  test('opens the popover', async () => {
    const el = (await fixture(html`<lit-country-dropdown></lit-country-dropdown>`)) as LitCountryDropdown;
    const button = el.shadowRoot!.querySelector('button')!;
    
    button.click();
    await el.updateComplete;

    assert.shadowDom.equal(
      el,
      `
      <div class="country-dropdown">
        <select id="country" name="country" hidden>
          <option value="fr">France</option>
          <option value="th">Thailand</option>
        </select>

        <button type="button" class="country-dropdown__button">
          <div class="country-dropdown__option">
            <div class="country-dropdown__flag">🇫🇷</div>
            <div class="country-dropdown__name">France</div>
            <div class="country-dropdown__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
        </button>

        <div class="country-dropdown__popover">
          <ul class="country-dropdown__list">
            <li class="country-dropdown__option" data-value="fr">
              <div class="country-dropdown__flag">🇫🇷</div>
              <div class="country-dropdown__name">France</div>
              <div class="country-dropdown__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </li>
            <li class="country-dropdown__option" data-value="th">
              <div class="country-dropdown__flag">🇹🇭</div>
              <div class="country-dropdown__name">Thailand</div>
              <div class="country-dropdown__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </li>
          </ul>
        </div>
        <slot></slot>
      </div>
    `
    );
  });

  test('selects the country option', async () => {
    const el = (await fixture(html`<lit-country-dropdown></lit-country-dropdown>`)) as LitCountryDropdown;
    const select = el.shadowRoot!.querySelector('select')!;
    const button = el.shadowRoot!.querySelector('button')!;
    const countyThOption = el.shadowRoot!.querySelector('.country-dropdown__option:nth-child(2)')! as HTMLElement;
    
    button.click();
    await el.updateComplete;

    countyThOption.click();
    await el.updateComplete;

    assert.equal(select.value, countyThOption.dataset.value);
  });
});
