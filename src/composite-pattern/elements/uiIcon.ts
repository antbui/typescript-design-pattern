import { IconBlock } from '../blocks/iconBlock';
import { ElementModel, UiElementOptions, UiElement } from '../core/uiElement';

export type IconModel = ElementModel<
  'ICON',
  {
    size: number;
    svg: string;
  }
>;

export class UiIcon extends UiElement<IconModel> {
  private iconBlock: IconBlock;

  constructor(options: UiElementOptions<IconModel>) {
    super(options);

    this.iconBlock = new IconBlock({ svg: 'icon.svg', size: 150 });
    this.addChild(this.iconBlock);
  }
}
