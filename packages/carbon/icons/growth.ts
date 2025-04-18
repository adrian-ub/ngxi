import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonGrowthIcon],svg[carbon-growth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8v2h6.586L18 18.586l-4.293-4.293a1 1 0 0 0-1.414 0L2 24.586L3.414 26L13 16.414l4.293 4.293a1 1 0 0 0 1.414 0L28 11.414V18h2V8Z"></svg:path>`,
})
export class CarbonGrowthIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
