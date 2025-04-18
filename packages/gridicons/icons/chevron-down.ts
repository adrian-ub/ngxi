import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsChevronDownIcon],svg[gridicons-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 9l-8 8l-8-8l1.414-1.414L12 14.172l6.586-6.586z"></svg:path>`,
})
export class GridiconsChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
