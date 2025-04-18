import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsArrowUpIcon],svg[gridicons-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20V7.83l5.59 5.59L20 12l-8-8l-8 8l1.41 1.41L11 7.83V20z"></svg:path>`,
})
export class GridiconsArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
