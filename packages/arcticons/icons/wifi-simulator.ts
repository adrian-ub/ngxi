import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWifiSimulatorIcon],svg[arcticons-wifi-simulator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13 17.375h22a8.5 8.5 0 0 1 8.5 8.5h0a8.5 8.5 0 0 1-8.5 8.5H13a8.5 8.5 0 0 1-8.5-8.5h0a8.5 8.5 0 0 1 8.5-8.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.5 17.375c-4.922 0-6.44 3.2-9.5 8.5s-4.578 8.5-9.5 8.5m1.723-12.098l-1.79 7.148l-1.791-7.148l-1.791 7.148l-1.79-7.148"></svg:path><svg:circle cx="18.013" cy="22.5" r=".7" fill="currentColor"></svg:circle><svg:circle cx="24.01" cy="10.875" r=".75" fill="currentColor"></svg:circle><svg:circle cx="26.3" cy="11.051" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.536" cy="11.574" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.666" cy="12.433" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.64" cy="13.606" r=".75" fill="currentColor"></svg:circle><svg:circle cx="34.411" cy="15.067" r=".75" fill="currentColor"></svg:circle><svg:circle cx="21.72" cy="11.051" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.484" cy="11.574" r=".75" fill="currentColor"></svg:circle><svg:circle cx="17.354" cy="12.433" r=".75" fill="currentColor"></svg:circle><svg:circle cx="15.38" cy="13.606" r=".75" fill="currentColor"></svg:circle><svg:circle cx="13.608" cy="15.067" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.013 24.689v4.736"></svg:path><svg:circle cx="36.815" cy="22.5" r=".7" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.815 24.689v4.736m-5.355-3.574h2.321m-2.321 3.574v-7.148h3.57m-2.551-4.902a12 12 0 0 0-8.469-3.5a12 12 0 0 0-8.467 3.5m0 17a12 12 0 0 0 8.467 3.5a12 12 0 0 0 8.467-3.5"></svg:path>`,
})
export class ArcticonsWifiSimulatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
