import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsArgosIcon],svg[arcticons-argos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.071 25.966H17.829m-3.527 10.633L24.95 4.5l10.649 32.099M9.383 39.664c9.664 4.925 19.405 5.258 29.235.124"></svg:path>`,
})
export class ArcticonsArgosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
