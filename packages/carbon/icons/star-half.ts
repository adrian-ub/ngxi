import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonStarHalfIcon],svg[carbon-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.45 11.22L1.28 12.7l7.36 7.17L6.9 30l9.1-4.78V2z"></svg:path>`,
})
export class CarbonStarHalfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
