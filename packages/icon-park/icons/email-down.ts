import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEmailDownIcon],svg[icon-park-email-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 15H44V28V41H4V28V15H12"></svg:path><svg:path d="M24 19V5"></svg:path><svg:path d="M30 13L24 19L18 13"></svg:path><svg:path d="M4 15L24 30L44 15"></svg:path></svg:g>`,
})
export class IconParkEmailDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
