import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[academiconsInspireIcon],svg[academicons-inspire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 32v448h448V32Zm77.673 79.678a34.076 34.076 0 0 1 34.076 34.076a34.076 34.076 0 0 1-34.076 34.076a34.076 34.076 0 0 1-34.076-34.076a34.076 34.076 0 0 1 34.076-34.076m76.17 9.02l64.173.16l116.23 187.258V120.698h59.132v280.626h-65.145l-112.25-185.413v185.413h-62.14ZM78.604 203.884h62.139v197.44H78.604z"></svg:path>`,
})
export class AcademiconsInspireIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
