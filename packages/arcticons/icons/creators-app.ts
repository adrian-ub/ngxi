import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCreatorsAppIcon],svg[arcticons-creators-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.337 28.559a4.68 4.68 0 0 1-4.063 2.364a4.686 4.686 0 0 1-4.68-4.693v-3.05a4.686 4.686 0 0 1 4.68-4.694c1.736 0 3.25.948 4.058 2.356m3.073-3.765l-1.169 3.286M28.38 5.5c-8.548 8.548-15.679 6.01-22.88 13.21"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.675 5.5c0 7.38-4.675 14.377-10.175 20.998"></svg:path>`,
})
export class ArcticonsCreatorsAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
