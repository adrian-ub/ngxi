import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLogitechGIcon],svg[arcticons-logitech-g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.36 20.372v8.163h9.524v9.523h8.162V20.372zM24.453 4.5a19.5 19.5 0 0 0 0 39v-9.07a10.43 10.43 0 0 1 0-20.86z"></svg:path>`,
})
export class ArcticonsLogitechGIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
