import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsMagicWandIcon],svg[radix-icons-magic-wand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 0 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm-2.046 2.646a.5.5 0 0 1 0 .708l-1 1a.5.5 0 1 1-.707-.708l1-1a.5.5 0 0 1 .707 0m-2 2a.5.5 0 0 1 0 .708l-7 7a.5.5 0 1 1-.708-.708l7-7a.5.5 0 0 1 .708 0M13.5 5.1c.22 0 .4.18.4.4v.6h.6a.4.4 0 0 1 0 .8h-.6v.6a.4.4 0 0 1-.8 0v-.6h-.6a.4.4 0 0 1 0-.8h.6v-.6c0-.22.18-.4.4-.4M8.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsMagicWandIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
