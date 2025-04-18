import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIqooIcon],svg[arcticons-iqoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.275 23.221v5.166"></svg:path><svg:circle cx="5.275" cy="20.388" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.103 24.254a4.133 4.133 0 1 1-8.266 0a4.133 4.133 0 0 1 8.266 0m12.397 0a4.133 4.133 0 1 1-8.265 0a4.133 4.133 0 0 1 8.265 0m-28.337.59l3.542 3.439m-4.133.103a4.133 4.133 0 1 1 4.133-4.132"></svg:path>`,
})
export class ArcticonsIqooIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
