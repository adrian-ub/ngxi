import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBatteryHeartIcon],svg[mdi-battery-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.67 4H11V2H5v2H3.33A1.34 1.34 0 0 0 2 5.33v15.34A1.34 1.34 0 0 0 3.33 22h9.34A1.34 1.34 0 0 0 14 20.67V5.33A1.34 1.34 0 0 0 12.67 4M19 16.17l-.58-.53C16.36 13.77 15 12.54 15 11a2.18 2.18 0 0 1 2.2-2.2a2.4 2.4 0 0 1 1.8.83a2.4 2.4 0 0 1 1.8-.83A2.18 2.18 0 0 1 23 11c0 1.5-1.36 2.74-3.42 4.61Z"></svg:path>`,
})
export class MdiBatteryHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
