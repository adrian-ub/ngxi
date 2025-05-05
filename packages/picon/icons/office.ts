import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconOfficeIcon],svg[picon-office-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8h7V0H0m1 6V5h5v1M1 2V1h5v1M3 8V6h1v2m1-2V1H4v5M3 6V1H2v5M1 4V3h5v1"></svg:path>`,
})
export class PiconOfficeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
