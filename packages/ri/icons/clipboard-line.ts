import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riClipboardLineIcon],svg[ri-clipboard-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4V2h10v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4zm0 2H5v14h14V6h-2v2H7zm2-2v2h6V4z"></svg:path>`,
})
export class RiClipboardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
