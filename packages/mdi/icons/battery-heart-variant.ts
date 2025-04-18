import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBatteryHeartVariantIcon],svg[mdi-battery-heart-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.67 4H15V2H9v2H7.33A1.34 1.34 0 0 0 6 5.33v15.34A1.34 1.34 0 0 0 7.33 22h9.34A1.34 1.34 0 0 0 18 20.67V5.33A1.34 1.34 0 0 0 16.67 4m-4.09 11.64l-.58.53l-.58-.53C9.36 13.77 8 12.54 8 11a2.18 2.18 0 0 1 2.2-2.2a2.4 2.4 0 0 1 1.8.83a2.4 2.4 0 0 1 1.8-.83A2.18 2.18 0 0 1 16 11c0 1.54-1.36 2.77-3.42 4.64"></svg:path>`,
})
export class MdiBatteryHeartVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
