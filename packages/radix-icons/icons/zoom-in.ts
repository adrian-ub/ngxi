import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsZoomInIcon],svg[radix-icons-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 6.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-.691 3.516a4.5 4.5 0 1 1 .707-.707l2.838 2.837a.5.5 0 0 1-.708.708zM4.25 6.5a.5.5 0 0 1 .5-.5H6V4.75a.5.5 0 0 1 1 0V6h1.25a.5.5 0 0 1 0 1H7v1.25a.5.5 0 0 1-1 0V7H4.75a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsZoomInIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
