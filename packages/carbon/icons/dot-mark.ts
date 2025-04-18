import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDotMarkIcon],svg[carbon-dot-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="8" fill="currentColor"></svg:circle>`,
})
export class CarbonDotMarkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
