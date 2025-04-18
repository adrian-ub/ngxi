import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTimeUntilIcon],svg[arcticons-time-until-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.6 4.5v2.373l10.092 17.22L11.6 41.356V43.5h24.8v-2.172L26.398 24.093L36.4 6.921V4.5z"></svg:path>`,
})
export class ArcticonsTimeUntilIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
