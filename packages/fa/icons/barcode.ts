import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBarcodeIcon],svg[fa-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M63 1408H0V0h63zm63-1H94V0h32zm94 0h-31V0h31zm157 0h-31V0h31zm157 0h-62V0h62zm126 0h-31V0h31zm63 0h-31V0h31zm63 0h-31V0h31zm157 0h-63V0h63zm157 0h-63V0h63zm126 0h-63V0h63zm126 0h-63V0h63zm94 0h-63V0h63zm189 0h-94V0h94zm63 0h-32V0h32zm94 1h-63V0h63z"></svg:path>`,
})
export class FaBarcodeIcon {
  readonly viewBox = input("0 0 1792 1408")
  readonly width = input("1.28em")
  readonly height = input("1em")
}
