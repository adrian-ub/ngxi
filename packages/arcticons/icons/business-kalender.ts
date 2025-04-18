import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBusinessKalenderIcon],svg[arcticons-business-kalender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.5 21.3v-3.24a3.24 3.24 0 0 0-3.24-3.24h-4.32a3.24 3.24 0 0 0-3.24 3.24v11.88a3.24 3.24 0 0 0 3.24 3.24h4.32a3.24 3.24 0 0 0 3.24-3.24v-4.32m-27 1.08v3.24a3.24 3.24 0 0 0 3.24 3.24h5.4a3.24 3.24 0 0 0 3.24-3.24V26.7a3.24 3.24 0 0 0-3.24-3.24m-8.64-5.4v-3.24h8.64a3.24 3.24 0 0 1 3.24 3.24v2.16a3.24 3.24 0 0 1-3.24 3.24H15.9"></svg:path>`,
})
export class ArcticonsBusinessKalenderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
