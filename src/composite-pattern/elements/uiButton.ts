import { IconBlock } from '../blocks/iconBlock';
import { TextBlock } from '../blocks/textBlock';
import { ElementModel, UiElementOptions, UiElement } from '../core/uiElement';

export type ButtonModel = ElementModel<
  'BUTTON',
  {
    color: string;
    text: string;
  }
>;

export class UiButton extends UiElement<ButtonModel> {
  private textBlock: TextBlock;
  private iconBlock: IconBlock;

  constructor(options: UiElementOptions<ButtonModel>) {
    super({ ...options });

    this.textBlock = new TextBlock({ text: this.model.data.text });
    this.iconBlock = new IconBlock({ svg: 'button.svg', size: 100 });

    this.addChild(this.iconBlock);
    this.addChild(this.textBlock);
  }
}
