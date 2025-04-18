import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLinkInIcon],svg[icon-park-link-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 12V4H32V12"></svg:path><svg:path d="M32 36V44H16V36"></svg:path><svg:path d="M18 24L4 24"></svg:path><svg:path d="M44 24L30 24"></svg:path><svg:path d="M24 34V14"></svg:path><svg:path d="M13 19L18 24L13 29"></svg:path><svg:path d="M35 19L30 24L35 29"></svg:path></svg:g>`,
})
export class IconParkLinkInIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
