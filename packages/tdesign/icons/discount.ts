import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDiscountIcon],svg[tdesign-discount-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.496 1.19l10.506.808l.808 10.505l-10.932 10.932L.564 12.121zm.764 2.064l-8.867 8.867l8.485 8.486l8.867-8.868l-.606-7.879zm3.86 4.624a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414m-2.828-1.414a3 3 0 1 1 4.243 4.242a3 3 0 0 1-4.243-4.242"></svg:path>`,
})
export class TdesignDiscountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
