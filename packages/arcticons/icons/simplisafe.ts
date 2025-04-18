import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSimplisafeIcon],svg[arcticons-simplisafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.21 16.71a12.21 12.21 0 0 0-24.42 0v5h24.42v9.58a12.21 12.21 0 0 1-24.42 0v-2.54"></svg:path>`,
})
export class ArcticonsSimplisafeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
