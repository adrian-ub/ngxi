import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilHorizontalDistributionRightIcon],svg[uil-horizontal-distribution-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a1 1 0 0 0-1 1v1h-5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v1a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1m-1 16h-4V6h4ZM9 2a1 1 0 0 0-1 1v2H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1M8 17H6V7h2Z"></svg:path>`,
})
export class UilHorizontalDistributionRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
