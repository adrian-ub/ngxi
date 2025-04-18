import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExposureZeroIcon],svg[material-symbols-exposure-zero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q-2.5 0-4-1.987T6.5 12T8 6.988T12 5t4 1.988T17.5 12T16 17.013T12 19m0-2.05q1.65 0 2.475-1.5T15.3 12t-.825-3.45T12 7.05t-2.475 1.5T8.7 12t.825 3.45T12 16.95"></svg:path>`,
})
export class MaterialSymbolsExposureZeroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
