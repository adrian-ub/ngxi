import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonOverflowMenuHorizontalIcon],svg[carbon-overflow-menu-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="16" r="2" fill="currentColor"></svg:circle>`,
})
export class CarbonOverflowMenuHorizontalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
