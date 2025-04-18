import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSecureVpnIcon],svg[arcticons-secure-vpn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.646 43.297h12.708c2.963 0 5.7-1.58 7.18-4.145l6.355-11.006a8.29 8.29 0 0 0 0-8.292L37.535 8.848a8.29 8.29 0 0 0-7.18-4.145h-12.71a8.29 8.29 0 0 0-7.18 4.145L4.111 19.854a8.29 8.29 0 0 0 0 8.292l6.354 11.006a8.29 8.29 0 0 0 7.18 4.145"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="18.603" cy="24" r="4.936"></svg:circle><svg:path d="M34.332 24.018H23.539m7.176 2.953v-2.953"></svg:path></svg:g>`,
})
export class ArcticonsSecureVpnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
