import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMacbookLineIcon],svg[ri-macbook-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v11h16V5zm-2-.993C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007V18H2zM1 19h22v2H1z"></svg:path>`,
})
export class RiMacbookLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
