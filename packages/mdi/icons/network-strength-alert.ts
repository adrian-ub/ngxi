import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrengthAlertIcon],svg[mdi-network-strength-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M18.999 17.003H21V8.999H19m0 12.002H21V19H19M1 21h16.002V7.003H21V1" fill="currentColor"></svg:path>`,
})
export class MdiNetworkStrengthAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
