import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBatteryOffIcon],svg[mdi-battery-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14.8L7.21 4H9V2h6v2h1.67A1.34 1.34 0 0 1 18 5.33m0 12.02L3.38 2.73L2.11 4L6 7.89v12.78A1.34 1.34 0 0 0 7.33 22h9.34A1.34 1.34 0 0 0 18 20.67v-.78l2.84 2.84l1.27-1.27Z"></svg:path>`,
})
export class MdiBatteryOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
