import { UiBlock } from '../core/uiBlock';

type IconBlockOptions = {
  svg: string;
  size: number;
};

export class IconBlock extends UiBlock {
  private options: IconBlockOptions;
  constructor(options: IconBlockOptions) {
    super();
    this.options = options;
  }

  public draw(): string {
    return `Drawing: IconBlock - Opts: ${JSON.stringify(this.options)}`;
  }
}
