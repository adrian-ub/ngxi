import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTimedMailIcon],svg[icon-park-outline-timed-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M44 35V9H4v28h22"></svg:path><svg:circle cx="35" cy="35" r="9"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 32v4h4M4 9l20 13L44 9"></svg:path></svg:g>`,
})
export class IconParkOutlineTimedMailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
