import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHexolineIconPackIcon],svg[arcticons-hexoline-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.445 21.846l6.575-4.705V4.5l-6.575 4.705zM28.979 43.5l6.576-4.705V26.154l-6.576 4.705zm-9.959 0l-6.575-4.705m23.11-29.59L28.98 4.5v13.989l-9.96 7.126v-4.166l-6.575 4.705v12.641L19.02 43.5v-9.823l16.535-11.831z"></svg:path>`,
})
export class ArcticonsHexolineIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
