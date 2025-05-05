import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconVolleyIcon],svg[picon-volley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2L6 1l1-1l1 1M4 3L3 2l1-1l1 1M1 2l1-2h1L2 2l1 1h5v1H5L4 6v2H2l1-1V6L2 7H0V6h2l1-2"></svg:path>`,
})
export class PiconVolleyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
