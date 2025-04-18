import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOcrIcon],svg[arcticons-ocr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.1 5.5H5.5V18m0 11.9v12.6h11.4m14.1 0h11.5V30m0-11.8V5.5H30.9M9.7 11.2h29.1M9.7 19.5h29.1M9.7 27.8h29.1M9.6 36.2h21.9"></svg:path>`,
})
export class ArcticonsOcrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
