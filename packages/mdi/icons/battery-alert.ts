import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBatteryAlertIcon],svg[mdi-battery-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14h-2V8h2m0 10h-2v-2h2m3.7-12H15V2H9v2H7.3C6.6 4 6 4.6 6 5.3v15.3c0 .8.6 1.4 1.3 1.4h9.3c.7 0 1.3-.6 1.3-1.3V5.3c.1-.7-.5-1.3-1.2-1.3"></svg:path>`,
})
export class MdiBatteryAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
