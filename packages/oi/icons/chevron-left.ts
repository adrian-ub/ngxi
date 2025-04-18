import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiChevronLeftIcon],svg[oi-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 0L1 4l4 4l1.5-1.5L4 4l2.5-2.5z"></svg:path>`,
})
export class OiChevronLeftIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
