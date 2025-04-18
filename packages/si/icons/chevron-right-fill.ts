import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siChevronRightFillIcon],svg[si-chevron-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 12L9.293 8.707a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class SiChevronRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
