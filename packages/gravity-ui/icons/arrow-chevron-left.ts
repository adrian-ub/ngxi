import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowChevronLeftIcon],svg[gravity-ui-arrow-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 8.75a.75.75 0 0 0 0-1.5H8.31l2.72-2.72a.75.75 0 1 0-1.06-1.06l-4 4a.75.75 0 0 0 0 1.06l4 4a.75.75 0 1 0 1.06-1.06L8.31 8.75zM6.53 4.53a.75.75 0 0 0-1.06-1.06l-4 4a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06-1.06L3.06 8z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowChevronLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
