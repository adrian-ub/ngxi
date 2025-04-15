import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsMaskOnIcon],svg[radix-icons-mask-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm6.5 9.625a3.125 3.125 0 1 0 0-6.25a3.125 3.125 0 0 0 0 6.25" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsMaskOnIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
