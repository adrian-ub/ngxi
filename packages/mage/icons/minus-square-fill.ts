import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMinusSquareFillIcon],svg[mage-minus-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1.63 11H7.12a1 1 0 0 1 0-2h9.76a1 1 0 0 1 0 2"></svg:path>`,
})
export class MageMinusSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
