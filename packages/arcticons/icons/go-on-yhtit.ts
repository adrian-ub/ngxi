import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoOnYhtitIcon],svg[arcticons-go-on-yhtit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.432 13.086c.2 4.291-2.687 8.112-6.86 9.08A8.864 8.864 0 0 1 4.43 17.032A8.91 8.91 0 0 1 7.646 6.105a8.85 8.85 0 0 1 11.298 1.21m2.488 5.67H13.43"></svg:path><svg:circle cx="31.007" cy="16.406" r="5.734" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="22.164" cy="34.367" r="8.736" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.289 43.355v-7.41c0-6.237 9.01-6.226 9.01 0v7.448"></svg:path>`,
})
export class ArcticonsGoOnYhtitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
