import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsChevronLeftIcon],svg[gridicons-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 20l-8-8l8-8l1.414 1.414L8.828 12l6.586 6.586z"></svg:path>`,
})
export class GridiconsChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
