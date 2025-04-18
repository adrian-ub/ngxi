import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLinkRightIcon],svg[icon-park-link-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 12V4H24V12"></svg:path><svg:path d="M24 36V44H8V36"></svg:path><svg:path d="M44 24L24 24"></svg:path><svg:path d="M16 34V14"></svg:path><svg:path d="M36 16L44 24L36 32"></svg:path></svg:g>`,
})
export class IconParkLinkRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
