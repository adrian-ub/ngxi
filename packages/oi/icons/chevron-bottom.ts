import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiChevronBottomIcon],svg[oi-chevron-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 1L0 2.5l4 4l4-4L6.5 1L4 3.5z"></svg:path>`,
})
export class OiChevronBottomIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
