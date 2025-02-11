/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {customElement} from 'lit/decorators.js';

import {Ripple} from './internal/ripple.js';
import {styles} from './internal/ripple-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-ripple': MdRipple;
  }
}

/**
 * @summary Ripples, also known as state layers, are visual indicators used to
 * communicate the status of a component or interactive element.
 *
 * @description A state layer is a semi-transparent covering on an element that
 * indicates its state. State layers provide a systematic approach to
 * visualizing states by using opacity. A layer can be applied to an entire
 * element or in a circular shape and only one state layer can be applied at a
 * given time.
 *
 * @final
 * @suppress {visibility}
 */
@customElement('md-ripple')
export class MdRipple extends Ripple {
  static override styles = [styles];
}
