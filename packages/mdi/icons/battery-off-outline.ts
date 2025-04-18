import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBatteryOffOutlineIcon],svg[mdi-battery-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17.35L3.38 2.73L2.11 4L6 7.89v12.78A1.34 1.34 0 0 0 7.33 22h9.34A1.34 1.34 0 0 0 18 20.67v-.78l2.84 2.84l1.27-1.27M16 20H8V9.89l8 8M16 6v6.8l2 2V5.33A1.34 1.34 0 0 0 16.67 4H15V2H9v2H7.21l2 2Z"></svg:path>`,
})
export class MdiBatteryOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
