import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLinkLeftIcon],svg[icon-park-link-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 12V4H40V12"></svg:path><svg:path d="M40 36V44H24V36"></svg:path><svg:path d="M24 24L4 24"></svg:path><svg:path d="M32 34V14"></svg:path><svg:path d="M12 16L4 24L12 32"></svg:path></svg:g>`,
})
export class IconParkLinkLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
