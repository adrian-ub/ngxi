import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChevronSortUpIcon],svg[carbon-chevron-sort-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 4l7 7l-1.4 1.4L16 6.8l-5.6 5.6L9 11z"></svg:path>`,
})
export class CarbonChevronSortUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
