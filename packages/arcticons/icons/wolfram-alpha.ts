import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWolframAlphaIcon],svg[arcticons-wolfram-alpha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 3.5l6.15 12.458l13.751 1.997l-9.945 9.704L36.3 41.357L24 34.891l-12.3 6.466l2.355-13.698l-9.956-9.704l13.751-1.997z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 44.5l6.15-12.458l13.751-1.997l-9.945-9.704L36.3 6.643L24 13.109L11.7 6.643l2.355 13.698l-9.956 9.704l13.751 1.997z"></svg:path>`,
})
export class ArcticonsWolframAlphaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
