import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCsIcon],svg[picon-cs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V4h5v1M3 3V2h5v1M6 6V1h1v5M1 6h2l1 1H0V0h4L3 1H1m4 5H4V1h1"></svg:path>`,
})
export class PiconCsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
