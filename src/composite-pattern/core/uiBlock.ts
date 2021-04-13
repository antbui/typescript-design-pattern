/**
 * The base UiBlock class declares common operations for both simple and
 * complex objects of a composition.
 */
export abstract class UiBlock {
  protected parent: UiBlock | null = null;

  /**
   * Optionally, the base UiBlock can declare an interface for setting and
   * accessing a parent of the UiBlock in a tree structure. It can also
   * provide some default implementation for these methods.
   */
  public setParent(parent: UiBlock | null): void {
    this.parent = parent;
  }

  public getParent(): UiBlock | null {
    return this.parent;
  }

  public addChild(child: UiBlock): void {}
  public removeChild(child: UiBlock): void {}

  /**
   * You can provide a method that lets the client code figure out whether a
   * component can bear children.
   */
  public isComposite(): boolean {
    return false;
  }

  public abstract draw(): string;
}
