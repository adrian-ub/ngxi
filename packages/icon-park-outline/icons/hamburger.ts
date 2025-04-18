import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHamburgerIcon],svg[icon-park-outline-hamburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 22c0-9.941-8.954-18-20-18S4 12.059 4 22z" clip-rule="evenodd"></svg:path><svg:path d="M4 38h40v6H4zm0-10l5.455 4l7.272-4L24 32l7.273-4l7.272 4L44 28"></svg:path></svg:g>`,
})
export class IconParkOutlineHamburgerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
