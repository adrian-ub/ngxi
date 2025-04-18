import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAtlasVpnIcon],svg[arcticons-atlas-vpn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.024 31.338a10.025 10.025 0 0 1 19.985 1.136l.002 10.024M6.187 29.039q-.024-.414-.024-.835a14.295 14.295 0 1 1 28.59 0l.003 14.294"></svg:path><svg:circle cx="17.543" cy="32.172" r="4.331" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 23.997A18.503 18.503 0 1 0 23.997 42.5H42.5z"></svg:path>`,
})
export class ArcticonsAtlasVpnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
