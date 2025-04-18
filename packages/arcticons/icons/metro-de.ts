import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetroDeIcon],svg[arcticons-metro-de-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 9.071h12.214L24 22.643L30.786 9.07H43v29.86h-9.5V21.286l-6.786 17.643h-5.428L14.5 21.286v17.643H5z"></svg:path>`,
})
export class ArcticonsMetroDeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
