import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconKebabHorizontal24Icon],svg[octicon-kebab-horizontal-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14a2 2 0 1 1-.001-3.999A2 2 0 0 1 20 14M6 12a2 2 0 1 1-3.999.001A2 2 0 0 1 6 12m8 0a2 2 0 1 1-3.999.001A2 2 0 0 1 14 12"></svg:path>`,
})
export class OcticonKebabHorizontal24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
