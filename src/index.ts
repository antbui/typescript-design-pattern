import { UiBlock } from './composite-pattern/core/uiBlock';
import { UiButton } from './composite-pattern/elements/uiButton';
import { UiIcon } from './composite-pattern/elements/uiIcon';

/**
 * The client code works with all of the components via the base interface.
 */
function clientCode(uiBlock: UiBlock) {
  console.log(`${uiBlock.draw()}`);
}

/**
 * This way the client code can support the simple leaf components...
 */
const buttonElement = new UiButton({
  model: {
    type: 'BUTTON',
    data: { width: 100, height: 100, color: 'red', text: 'button 1' },
  },
});
clientCode(buttonElement);
console.log('');

const iconElement = new UiIcon({
  model: {
    type: 'ICON',
    data: { width: 100, height: 100, size: 100, svg: 'button 1' },
  },
});
clientCode(iconElement);
console.log('');
