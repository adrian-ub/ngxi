import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpenmapsIcon],svg[arcticons-openmaps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.81 5.5L6.25 9.45a1 1 0 0 0-.74 1v31a1 1 0 0 0 1 1h.33l11-4.26l12.3 4.31l11.56-4a1 1 0 0 0 .74-1v-31a1 1 0 0 0-1-1l-.33.07l-11 4.19Zm12.31 4.31V42.5m-12.27-4.31V5.6"></svg:path>`,
})
export class ArcticonsOpenmapsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
