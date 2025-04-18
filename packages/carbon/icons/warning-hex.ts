import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonWarningHexIcon],svg[carbon-warning-hex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 21M15 8h2v10h-2z"></svg:path><svg:path fill="currentColor" d="M23 29H9a1 1 0 0 1-.864-.496l-7-12a1 1 0 0 1 0-1.008l7-12A1 1 0 0 1 9 3h14a1 1 0 0 1 .864.496l7 12a1 1 0 0 1 0 1.008l-7 12A1 1 0 0 1 23 29M9.574 27h12.852l6.416-11l-6.416-11H9.574L3.158 16Z"></svg:path>`,
})
export class CarbonWarningHexIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
