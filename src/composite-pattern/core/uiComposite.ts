import { UiBlock } from './uiBlock';

/**
 * The Composite class represents the complex components that may have children.
 * Usually, the Composite objects delegate the actual work to their children and
 * then "sum-up" the result.
 */
export class UiComposite extends UiBlock {
  protected children: UiBlock[] = [];

  public addChild(child: UiBlock): void {
    this.children.push(child);
    child.setParent(this);
  }

  public removeChild(child: UiBlock): void {
    const childIndex = this.children.indexOf(child);
    this.children.splice(childIndex, 1);
    child.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  public draw(): string {
    const results = [];
    for (const child of this.children) {
      results.push(child.draw());
    }

    return `${results.join('\n')}`;
  }
}
