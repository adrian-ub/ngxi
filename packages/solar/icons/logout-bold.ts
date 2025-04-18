import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLogoutBoldIcon],svg[solar-logout-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.47 8.47a.75.75 0 0 0 0 1.06l1.72 1.72H10a.75.75 0 0 0 0 1.5h8.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4 12a8 8 0 0 0 8 8v-3.75c0-.943 0-1.414-.293-1.707s-.764-.293-1.707-.293"></svg:path>`,
})
export class SolarLogoutBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
