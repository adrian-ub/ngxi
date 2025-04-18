import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBbcIcon],svg[arcticons-bbc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.833 17.167H44.5v13.667H30.833z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.167 17.167h13.667v13.667H17.167zm-13.667 0h13.667v13.667H3.5zm37.148 8.315v.037a2.98 2.98 0 0 1-2.981 2.981h0a2.98 2.98 0 0 1-2.982-2.981V22.48a2.98 2.98 0 0 1 2.982-2.981h0a2.98 2.98 0 0 1 2.98 2.981v.037"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.065 24a2.25 2.25 0 0 1 0 4.5H7.352v-9h3.713a2.25 2.25 0 0 1 0 4.5m0 0H7.352m17.379 0a2.25 2.25 0 1 1 0 4.5H21.02v-9h3.712a2.25 2.25 0 1 1 0 4.5m-.001 0h-3.712"></svg:path>`,
})
export class ArcticonsBbcIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
