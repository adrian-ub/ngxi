import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBatteryCharging40Icon],svg[mdi-battery-charging-40-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4h-2V2H5v2H3c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1m-1 10.5H4V6h8zM23 11h-3V4l-5 10h3v8"></svg:path>`,
})
export class MdiBatteryCharging40Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
