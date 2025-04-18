import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBitdefenderVpn1Icon],svg[arcticons-bitdefender-vpn-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 42.5c16.65-7.85 15.05-21.05 15.05-23.45v-7.6L24 5.5L8.95 11.45v7.6c0 2.4-1.6 15.6 15.05 23.45"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.87 22.39l-2.603 2.604a2.617 2.617 0 0 0 0 3.701l2.038 2.038a2.617 2.617 0 0 0 3.701 0l3.005-3.005c.377-.376.588-.887.588-1.42V21.28"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.13 23.61l2.603-2.604a2.617 2.617 0 0 0 0-3.701l-2.038-2.038a2.617 2.617 0 0 0-3.701 0l-3.005 3.005a2 2 0 0 0-.588 1.42v5.028"></svg:path>`,
})
export class ArcticonsBitdefenderVpn1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
