import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsChevronUpIcon],svg[gridicons-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 15l8-8l8 8l-1.414 1.414L12 9.828l-6.586 6.586z"></svg:path>`,
})
export class GridiconsChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
