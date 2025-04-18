import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPageSeparatorIcon],svg[ri-page-separator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21v-4H7v4H5v-5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5zM7 3v4h10V3h2v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3zM2 9l4 3l-4 3zm20 0v6l-4-3z"></svg:path>`,
})
export class RiPageSeparatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
