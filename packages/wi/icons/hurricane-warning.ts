import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiHurricaneWarningIcon],svg[wi-hurricane-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.8 24.6V7.45h1.13V24.6zm1.93-3.08v-6.6h8.55v6.6zm0-7.47v-6.6h8.55v6.6zm2.36 5.47h3.81v-2.51h-3.81zm0-7.47h3.81v-2.5h-3.81z"></svg:path>`,
})
export class WiHurricaneWarningIcon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
