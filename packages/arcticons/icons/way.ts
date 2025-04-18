import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWayIcon],svg[arcticons-way-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="32.356" height="23.23" x="11.144" y="9.063" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.898"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.144 15.707H7.398A2.9 2.9 0 0 0 4.5 18.605v17.434a2.9 2.9 0 0 0 2.898 2.898h26.56a2.9 2.9 0 0 0 2.898-2.898v-3.746M11.144 12.809H43.5m-32.356 5.796H43.5"></svg:path>`,
})
export class ArcticonsWayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
