import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBatteryCharging30Icon],svg[mdi-battery-charging-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15H4V6h8m.67-2H11V2H5v2H3.33A1.33 1.33 0 0 0 2 5.33v15.34C2 21.4 2.6 22 3.33 22h9.34c.73 0 1.33-.6 1.33-1.33V5.33A1.33 1.33 0 0 0 12.67 4M23 11h-3V4l-5 10h3v8z"></svg:path>`,
})
export class MdiBatteryCharging30Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
