import {LitElement, html, customElement, property, css} from 'lit-element';

/**
 * A dropdown to show country names with flags.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('lit-country-dropdown')
export class LitCountryDropdown extends LitElement {
  static styles = css`
    :host {
      --accent-color: rgb(79, 70, 229);

      display: inline-block;
      min-width: 300px;

      font-size: 0.875rem;
      font-family: sans-serif;

      /* TODO: Remove boilerplate styles */
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }

    :host * {
      box-sizing: border-box;
    }

    .country-dropdown {
      position: relative;
    }

    .country-dropdown__popover--hidden {
      display: none;
    }

    .country-dropdown__button,
    .country-dropdown__popover {
      width: 100%;

      background: rgb(255, 255, 255);
      border: 1px solid rgb(204, 204, 204);
      border-radius: 6px;
    }

    .country-dropdown__option {
      padding: 8px 12px;

      font-size: inherit;
    }

    .country-dropdown__option:first-child {
      border-top-right-radius: 6px;
      border-top-left-radius: 6px;
    }

    .country-dropdown__option:last-child {
      border-bottom-right-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    .country-dropdown__button {
      display: inline-block;
      padding: 0;

      text-align: left;
    }

    .country-dropdown__button:focus {
      border-color: var(--accent-color);
      box-shadow: 1px 1px 1px var(--accent-color), -1px -1px 1px var(--accent-color), 0 0 #0000;
      outline: transparent;
    }

    .country-dropdown__option {
      display: flex;
      align-items: center;

      cursor: pointer;
    }
    .country-dropdown__option > * {
      height: 20px;
      line-height: 20px;
    }

    .country-dropdown__name {
      flex-grow: 1;
      margin-left: 12px;
    }

    .country-dropdown__icon {
      width: 20px;
      margin-left: 12px;
    }    

    .country-dropdown__list {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .country-dropdown__popover {
      position: absolute;
      margin-top: 6px;
    }

    .country-dropdown__popover .country-dropdown__option:hover {
      color: rgb(255, 255, 255);

      background-color: var(--accent-color);
    }
  `;

  @property({type: Array})
  countries = [
    {displayName: 'France', flag: '🇫🇷', isoCode: 'fr'}, 
    {displayName: 'Thailand', flag: '🇹🇭', isoCode: 'th'}
  ];

  @property({type: String})
  name = 'country';

  @property({type: Boolean})
  showPopover = false;

  render() {
    return html`
      <div class="country-dropdown">
        <select id="${this.name}" name="${this.name}" hidden>
          <option value="fr">France</option>
          <option value="th">Thailand</option>
        </select>

        <button type="button" class="country-dropdown__button" @click="${this._togglePopover}">
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

        <div class="country-dropdown__popover ${!this.showPopover ? "country-dropdown__popover--hidden" : "" }">
          <ul class="country-dropdown__list">
          ${this.countries.map(country =>  html`
            <li class="country-dropdown__option" data-value="${country.isoCode}" @click="${this._selectOption}">
              <div class="country-dropdown__flag">${country.flag}</div>
              <div class="country-dropdown__name">${country.displayName}</div>
              <div class="country-dropdown__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </li>
            `
            )}
          </ul>
        </div>
        <slot></slot>
      </div>
    `;
  }

  private _togglePopover() {
    this.showPopover = !this.showPopover;
  }

  private _selectOption(e: Event) {
    let optionElement = e.currentTarget as HTMLElement;
    let optionValue = optionElement.dataset.value as string;
    let selectElement = this.shadowRoot!.querySelector('select') as HTMLSelectElement;

    selectElement.value = optionValue;
    this.showPopover = false;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-country-dropdown': LitCountryDropdown;
  }
}
