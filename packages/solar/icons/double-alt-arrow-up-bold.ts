import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowUpBoldIcon],svg[solar-double-alt-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.43 13.488a.75.75 0 0 0 1.058.081L12 7.988l6.512 5.581a.75.75 0 1 0 .976-1.138l-7-6a.75.75 0 0 0-.976 0l-7 6a.75.75 0 0 0-.081 1.057" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5 17.75a.75.75 0 0 1-.488-1.32l7-6a.75.75 0 0 1 .976 0l7 6A.75.75 0 0 1 19 17.75z"></svg:path>`,
})
export class SolarDoubleAltArrowUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
