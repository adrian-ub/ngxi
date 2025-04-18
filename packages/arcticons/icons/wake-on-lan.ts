import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWakeOnLanIcon],svg[arcticons-wake-on-lan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M28.662 11.167a16.503 16.503 0 1 1-9.016-.088"></svg:path><svg:path d="M24.004 4.5h.096v25.18h-.096z"></svg:path></svg:g>`,
})
export class ArcticonsWakeOnLanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
