import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUlIcon],svg[arcticons-ul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.088 41.057c-8.987 6.896-21.784 5.636-29.253-2.881s-7.049-21.369.962-29.38c8.01-8.01 20.862-8.43 29.379-.96c8.517 7.468 9.777 20.265 2.881 29.252"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.007 15.19v17.62h8.615M10.378 15.19v11.784c0 3.224 2.555 5.837 5.707 5.837s5.707-2.613 5.707-5.837V15.19"></svg:path><svg:circle cx="39.203" cy="39.203" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsUlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
