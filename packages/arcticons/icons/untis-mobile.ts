import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUntisMobileIcon],svg[arcticons-untis-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.981 2.5A21.481 21.481 0 1 1 2.5 23.981h0A21.49 21.49 0 0 1 23.981 2.5m-.005 21.526h17.229M23.976 6.798v17.229m12.183-12.183L23.977 24.026"></svg:path>`,
})
export class ArcticonsUntisMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
