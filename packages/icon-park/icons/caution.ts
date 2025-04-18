import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCautionIcon],svg[icon-park-caution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M24 5L2 43H46L24 5Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 35V36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 19.0005L24.0083 29"></svg:path></svg:g>`,
})
export class IconParkCautionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
