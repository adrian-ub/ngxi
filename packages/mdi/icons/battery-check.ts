import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBatteryCheckIcon],svg[mdi-battery-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.75 21.16l-2.75-3L15.16 17l1.59 1.59L20.34 15l1.16 1.41zM12 18c0-3.31 2.69-6 6-6V5.33C18 4.6 17.4 4 16.67 4H15V2H9v2H7.33C6.6 4 6 4.6 6 5.33v15.34C6 21.4 6.6 22 7.33 22h6.21A5.93 5.93 0 0 1 12 18"></svg:path>`,
})
export class MdiBatteryCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
