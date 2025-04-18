import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsArrowDownIcon],svg[gridicons-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4v12.17l-5.59-5.59L4 12l8 8l8-8l-1.41-1.41L13 16.17V4z"></svg:path>`,
})
export class GridiconsArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
