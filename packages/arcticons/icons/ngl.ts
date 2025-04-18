import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNglIcon],svg[arcticons-ngl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 42.5h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.389 18.5v11h5.5m-25.778 0v-11l7.287 11v-11m10.208 3.644a3.644 3.644 0 0 0-3.643-3.644h0a3.644 3.644 0 0 0-3.644 3.644v3.712a3.644 3.644 0 0 0 3.644 3.644h0a3.644 3.644 0 0 0 3.643-3.644h-3.644"></svg:path>`,
})
export class ArcticonsNglIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
