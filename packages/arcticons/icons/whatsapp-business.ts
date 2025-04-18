import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWhatsappBusinessIcon],svg[arcticons-whatsapp-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5c-11.885.013-21.51 9.658-21.497 21.543A21.5 21.5 0 0 0 5.15 34.36L3.5 44.5l10.14-1.65c10.41 5.71 23.48 1.901 29.19-8.51s1.902-23.479-8.509-29.19a21.5 21.5 0 0 0-10.32-2.65Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.544 24a4.75 4.75 0 1 1 0 9.5h-7.838v-19h7.838a4.75 4.75 0 0 1 0 9.5m0 0h-7.838"></svg:path>`,
})
export class ArcticonsWhatsappBusinessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
