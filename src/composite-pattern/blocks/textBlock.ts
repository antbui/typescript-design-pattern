import { UiBlock } from '../core/uiBlock';

type TextBlockOptions = {
  text: string;
};

export class TextBlock extends UiBlock {
  private options: TextBlockOptions;

  constructor(options: TextBlockOptions) {
    super();
    this.options = options;
  }

  public draw(): string {
    return `Drawing: TextBlock - Opts: ${JSON.stringify(this.options)}`;
  }
}
