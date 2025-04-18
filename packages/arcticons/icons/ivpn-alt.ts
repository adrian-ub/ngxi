import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIvpnAltIcon],svg[arcticons-ivpn-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.457 18.573h1.628m0 0l-1.914 10.854m11.038 0l1.913-10.853h3.553c2.009 0 3.35 1.631 2.995 3.644s-2.271 3.645-4.28 3.645h-3.553m8.516 3.564l1.914-10.854l5.276 10.854l1.914-10.854m-18.262 0l-5.509 10.854l-1.681-10.854"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 19.6v18.9a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4z"></svg:path>`,
})
export class ArcticonsIvpnAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
