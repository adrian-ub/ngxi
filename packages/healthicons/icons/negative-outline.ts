import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsNegativeOutlineIcon],svg[healthicons-negative-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18m0 2c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20"></svg:path><svg:path d="M13 24a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class HealthiconsNegativeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
