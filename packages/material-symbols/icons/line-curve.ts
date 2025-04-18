import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineCurveIcon],svg[material-symbols-line-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20q0-2.9-1.1-5.45t-3-4.45t-4.45-3T4 6V4q3.3 0 6.213 1.263T15.3 8.7t3.438 5.088T20 20z"></svg:path>`,
})
export class MaterialSymbolsLineCurveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
