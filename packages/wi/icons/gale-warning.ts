import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiGaleWarningIcon],svg[wi-gale-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.67 24.6V7.45h1.03V24.6zm1.73-2.16v-7.41l8.65 3.69zm0-7.58V7.45l8.65 3.69z"></svg:path>`,
})
export class WiGaleWarningIcon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
