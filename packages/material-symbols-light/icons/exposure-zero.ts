import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightExposureZeroIcon],svg[material-symbols-light-exposure-zero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.962q-2.02 0-3.183-1.7T7.654 12t1.163-4.262T12 6.038t3.183 1.7T16.346 12t-1.163 4.263T12 17.96m0-1.011q1.65 0 2.475-1.5T15.3 12t-.825-3.45T12 7.05t-2.475 1.5T8.7 12t.825 3.45T12 16.95"></svg:path>`,
})
export class MaterialSymbolsLightExposureZeroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
