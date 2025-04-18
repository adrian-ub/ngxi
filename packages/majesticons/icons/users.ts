import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsUsersIcon],svg[majesticons-users-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="9" cy="9" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M9 13c-3.866 0-7 2.686-7 6h14c0-3.314-3.134-6-7-6"></svg:path><svg:path d="M15 13a4 4 0 1 0-3-6.646m0 5.411c.897.942 2.193 1.235 3 1.235c3.866 0 7 2.686 7 6h-6"></svg:path></svg:g>`,
})
export class MajesticonsUsersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
