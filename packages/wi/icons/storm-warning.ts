import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiStormWarningIcon],svg[wi-storm-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.76 24.6V7.45h1.13V24.6zm1.94-10.55v-6.6h8.55v6.6zm2.36-2h3.81v-2.5h-3.81z"></svg:path>`,
})
export class WiStormWarningIcon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
