import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChineseIcon],svg[icon-park-chinese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:rect width="20" height="10" x="14" y="18" fill="#43CCF8" stroke="#fff" stroke-linejoin="round"></svg:rect><svg:path stroke="#fff" d="M24 14V35"></svg:path></svg:g>`,
})
export class IconParkChineseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
