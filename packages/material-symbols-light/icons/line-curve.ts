import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineCurveIcon],svg[material-symbols-light-line-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20q0-2.9-1.1-5.45t-3-4.45t-4.45-3T4 6V5q3.108 0 5.838 1.176t4.77 3.216t3.216 4.77T19 20z"></svg:path>`,
})
export class MaterialSymbolsLightLineCurveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
