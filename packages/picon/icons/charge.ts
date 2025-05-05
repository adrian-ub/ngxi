import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconChargeIcon],svg[picon-charge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4h2v1H1m3-1h1V3h1v1h1v1H6v1H5V5H4M0 7h8V2H7V1H5v1H3V1H1v1H0"></svg:path>`,
})
export class PiconChargeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
