import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPolaroid2FillIcon],svg[ri-polaroid-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 20.007zM6 17v2h12v-2zM5 5v2h2V5zm7 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 2a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path>`,
})
export class RiPolaroid2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
