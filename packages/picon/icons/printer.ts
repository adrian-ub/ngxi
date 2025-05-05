import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPrinterIcon],svg[picon-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1v1h2V1M2 7V5h1v1h2V5h1v2m1-2V4H1v1H0V2h2V0h4v2h2v3"></svg:path>`,
})
export class PiconPrinterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
