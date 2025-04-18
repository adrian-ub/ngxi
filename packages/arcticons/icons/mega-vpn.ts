import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMegaVpnIcon],svg[arcticons-mega-vpn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.15 5.45C16.33 3.57 20.04 2.5 24 2.5c11.87 0 21.5 9.63 21.5 21.5S35.87 45.5 24 45.5S2.5 35.87 2.5 24c0-3.96 1.07-7.67 2.95-10.85"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 31.483V16.5l10.5 15l10.5-14.977V31.5"></svg:path><svg:circle cx="9.798" cy="9.798" r="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.198 12.798l2.4-3h-3.6l2.4-3"></svg:path>`,
})
export class ArcticonsMegaVpnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
