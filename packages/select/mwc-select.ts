/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {customElement} from 'lit-element';
import {SelectBase} from './mwc-select-base';
import {styles} from './mwc-select.css';

declare global {
  interface HTMLElementTagNameMap {
    'mwc-select': Select;
  }
}

@customElement('mwc-select')
export class Select extends SelectBase {
  static styles = [styles];
}
