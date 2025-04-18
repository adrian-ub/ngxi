import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsArCardIcon],svg[arcticons-ar-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="39" height="26.897" x="4.5" y="10.552" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.017" ry="2.017"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.88 27.362h13.448M9.879 32.07h29.587"></svg:path>`,
})
export class ArcticonsArCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
