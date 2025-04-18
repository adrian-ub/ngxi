import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsChevronRightIcon],svg[gridicons-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 20l8-8l-8-8l-1.414 1.414L15.172 12l-6.586 6.586z"></svg:path>`,
})
export class GridiconsChevronRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
