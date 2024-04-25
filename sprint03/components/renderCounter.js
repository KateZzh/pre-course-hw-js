import { Header } from './header/Header.js';
import { Value } from './value/Value.js';
import { Button } from './button/Button.js';
import { decreaseCount, increaseCount } from '../data/dataCounter.js';

export function renderCounter() {
  document.body.innerHTML = '';

  const header = Header();

  const value = Value();

  const buttonInc = Button('inc', increaseCount);
  const buttonDec = Button('dec', decreaseCount);

  document.body.append(header, value, buttonInc, buttonDec);
}
