import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiChevronTopIcon],svg[oi-chevron-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1L0 5l1.5 1.5L4 4l2.5 2.5L8 5z"></svg:path>`,
})
export class OiChevronTopIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
