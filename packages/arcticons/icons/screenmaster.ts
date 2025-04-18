import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsScreenmasterIcon],svg[arcticons-screenmaster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 9.2h3.7v0h25.9a3.98 3.98 0 0 1 3.7 3.7l.112 20.736M9.281 13.743L9.2 35.1a3.98 3.98 0 0 0 3.7 3.7h25.9v0h3.7"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.6 31.4v-3.7l11.1-11.1l3.7 3.7l-11.1 11.1Z"></svg:path>`,
})
export class ArcticonsScreenmasterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
