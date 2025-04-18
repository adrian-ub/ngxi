import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBatteryMinusVariantIcon],svg[mdi-battery-minus-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.67 4C17.4 4 18 4.6 18 5.33v15.34A1.33 1.33 0 0 1 16.67 22H7.33C6.6 22 6 21.4 6 20.67V5.33A1.33 1.33 0 0 1 7.33 4H9V2h6v2zM8 12v2h8v-2"></svg:path>`,
})
export class MdiBatteryMinusVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
