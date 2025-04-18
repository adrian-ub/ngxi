import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWnbaIcon],svg[arcticons-wnba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.248 20l-3.41 8l-.59-8l-3.41 8l-.59-8m8.987 8l1.41-8l3.89 8l1.41-8m5.413 4c1.105 0 1.842.895 1.648 2s-1.248 2-2.353 2h-3.3l1.41-8h3.3c1.105 0 1.843.895 1.648 2s-1.248 2-2.353 2m0 0h-3.3m11.283 1.35h-3.544M33.452 28l4.061-8l1.239 8"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsWnbaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
