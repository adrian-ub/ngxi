import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelTshirtIcon],svg[raphael-tshirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.1 4.04a4.58 4.58 0 0 1-4.24 2.86a4.58 4.58 0 0 1-4.24-2.86L1.238 8.44l2.92 6.884l3.21-1.36V28h17.098V14.015l3.093 1.312l2.92-6.884z"></svg:path>`,
})
export class RaphaelTshirtIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
