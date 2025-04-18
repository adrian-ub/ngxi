import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOnlineMeetingIcon],svg[icon-park-online-meeting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M44 8H4V38H19L24 43L29 38H44V8Z"></svg:path><svg:path stroke="#fff" d="M12 19V27"></svg:path><svg:path stroke="#fff" d="M20 16V30"></svg:path><svg:path stroke="#fff" d="M28 21V25"></svg:path><svg:path stroke="#fff" d="M36 19V27"></svg:path></svg:g>`,
})
export class IconParkOnlineMeetingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
