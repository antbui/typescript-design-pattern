import { UiComposite } from './uiComposite';

export type ElementType = 'ICON' | 'BUTTON';

export type ElementModel<
  T extends ElementType = ElementType,
  P extends Record<string, unknown> = Record<string, unknown>
> = {
  type: T;
  data: P & {
    width?: number | null;
    height?: number | null;
  };
};

export type UiElementOptions<M> = {
  model: M;
};

export class UiElement<
  M extends ElementModel = ElementModel
> extends UiComposite {
  public readonly model: M;
  constructor({ model }: UiElementOptions<M>) {
    super();
    this.model = model;
  }
}
