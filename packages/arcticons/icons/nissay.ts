import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNissayIcon],svg[arcticons-nissay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.75 13.25L45.5 24L24 45.5L2.5 24L24 2.5zv21.5l-15.357-6.143l-6.143 6.143v-21.5l15.357 6.143z"></svg:path>`,
})
export class ArcticonsNissayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
