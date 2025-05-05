import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTelIcon],svg[picon-tel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2H6v5h2V6H7M2 1H1v6h1m1-7H0v1h3m2 4H4v1h1v1H3V2h2v1H4v1h1"></svg:path>`,
})
export class PiconTelIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
