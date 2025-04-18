import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrengthAlertOutlineIcon],svg[mdi-network-strength-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21.001 1l-20 20.001h16.002V19H6L19 5.83v1.173H21M19 8.998v8.004H21V8.999m-2.002 10V21H21V19" fill="currentColor"></svg:path>`,
})
export class MdiNetworkStrengthAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
