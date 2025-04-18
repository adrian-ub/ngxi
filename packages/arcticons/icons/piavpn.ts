import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPiavpnIcon],svg[arcticons-piavpn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.977 25.28a3.261 3.261 0 0 0-1.634 6.074l-1 4.64h5.312l-1-4.64a3.27 3.27 0 0 0 1.61-2.806v-.038a3.266 3.266 0 0 0-3.288-3.23"></svg:path><svg:rect width="31.231" height="25.727" x="8.384" y="17.773" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.352 17.773V15.16a10.66 10.66 0 0 1 21.319 0v2.613"></svg:path><svg:path fill="currentColor" d="M21.108 10.984a.75.75 0 1 0-.75.75a.75.75 0 0 0 .75-.75"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.449 14.607a6.1 6.1 0 0 0 2.562.655a6.1 6.1 0 0 0 2.563-.655"></svg:path><svg:path fill="currentColor" d="M27.665 10.234a.75.75 0 1 0 .75.75a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class ArcticonsPiavpnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
