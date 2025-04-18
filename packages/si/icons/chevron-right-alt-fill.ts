import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siChevronRightAltFillIcon],svg[si-chevron-right-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.293 3.293a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414L14.586 12L7.293 4.707a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class SiChevronRightAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
