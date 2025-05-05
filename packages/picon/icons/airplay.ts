import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAirplayIcon],svg[picon-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h8v5H5L4 5L3 6H0m2 2l2-2l2 2M1 2v3h6V2"></svg:path>`,
})
export class PiconAirplayIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
