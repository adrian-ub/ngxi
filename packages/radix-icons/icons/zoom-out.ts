import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsZoomOutIcon],svg[radix-icons-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 10a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0 1a4.48 4.48 0 0 0 2.809-.984l2.837 2.838a.5.5 0 0 0 .708-.708L10.016 9.31A4.5 4.5 0 1 0 6.5 11M4.75 6a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsZoomOutIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
