import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFlagVariantMinusIcon],svg[mdi-flag-variant-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3c.6 0 1 .4 1 1v.9c1.1-.5 2.5-.9 4-.9c3 0 3 2 5 2c3 0 4-2 4-2v8s-1 2-4 2s-3-2-5-2c-3 0-4 2-4 2v7H5V4c0-.6.4-1 1-1m9 15v2h8v-2z"></svg:path>`,
})
export class MdiFlagVariantMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
