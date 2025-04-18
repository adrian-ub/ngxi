import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiChevronRightIcon],svg[oi-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 0L1 1.5L3.5 4L1 6.5L2.5 8l4-4z"></svg:path>`,
})
export class OiChevronRightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
