import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHomematicIpIcon],svg[arcticons-homematic-ip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.299 16.5v15m7.464 0v-15h4.91c2.777 0 5.028 2.255 5.028 5.038s-2.25 5.037-5.027 5.037h-4.91"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.415 5.95q12.585-.9 25.17 0c2.764.21 5.255 2.701 5.466 5.465q.898 12.585 0 25.17c-.211 2.764-2.702 5.255-5.466 5.466q-12.585.898-25.17 0c-2.764-.211-5.255-2.702-5.466-5.466Q5.05 24 5.95 11.415c.211-2.764 2.702-5.255 5.466-5.466"></svg:path>`,
})
export class ArcticonsHomematicIpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
