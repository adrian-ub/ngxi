import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsNegativeNegativeIcon],svg[healthicons-negative-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-30-1a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsNegativeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
