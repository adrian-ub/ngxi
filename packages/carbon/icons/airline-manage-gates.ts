import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAirlineManageGatesIcon],svg[carbon-airline-manage-gates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 23h-2v-2a3.003 3.003 0 0 0-3-3H9a3.003 3.003 0 0 0-3 3v2H4v-2a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zM11 6a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5M2 26h28v2H2zM22 4v2h4.586L20 12.586L21.414 14L28 7.414V12h2V4z"></svg:path>`,
})
export class CarbonAirlineManageGatesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
