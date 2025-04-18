import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCancelOutlineIcon],svg[healthicons-cancel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-7.272 12.728A17.94 17.94 0 0 1 24 42c-9.941 0-18-8.059-18-18c0-4.97 2.015-9.47 5.272-12.728zm1.336-1.492l-25.3-25.3A17.92 17.92 0 0 1 24 6c9.941 0 18 8.059 18 18c0 4.25-1.473 8.156-3.936 11.236" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsCancelOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
