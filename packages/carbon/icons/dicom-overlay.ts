import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDicomOverlayIcon],svg[carbon-dicom-overlay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M28 6v20H4V6h24m0-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" fill="currentColor"></svg:path><svg:path d="M6 8h10v2H6z" fill="currentColor"></svg:path><svg:path d="M6 12h10v2H6z" fill="currentColor"></svg:path><svg:path d="M6 16h6v2H6z" fill="currentColor"></svg:path>`,
})
export class CarbonDicomOverlayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
