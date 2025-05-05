import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSeatbeltIcon],svg[picon-seatbelt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 1l1-1l1 1l-1 1m4-2v1L1 8H0m4-3h5v1H3m3 2c2-8-6-8-4 0m1-1h2v1H3"></svg:path>`,
})
export class PiconSeatbeltIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
