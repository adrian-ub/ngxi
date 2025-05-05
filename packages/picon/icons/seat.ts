import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSeatIcon],svg[picon-seat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 6l2 2H2l2-2H2L1 0h2l1 2h2v1H4v1h3v2"></svg:path>`,
})
export class PiconSeatIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
