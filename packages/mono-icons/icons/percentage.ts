import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[monoIconsPercentageIcon],svg[mono-icons-percentage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0M17 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4M7 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class MonoIconsPercentageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
