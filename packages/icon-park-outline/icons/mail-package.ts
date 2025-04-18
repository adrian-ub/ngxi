import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMailPackageIcon],svg[icon-park-outline-mail-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 42h40V18H4z"></svg:path><svg:path stroke-linecap="round" d="m4 18l20 15l20-15"></svg:path><svg:path stroke-linecap="round" d="M24 18H4v15m40 0V18H24m-12-6h24M16 6h16"></svg:path></svg:g>`,
})
export class IconParkOutlineMailPackageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
