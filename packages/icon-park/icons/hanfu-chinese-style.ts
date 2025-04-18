import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHanfuChineseStyleIcon],svg[icon-park-hanfu-chinese-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9 9L18 4H30L39 9L43 25L35 29V44H13V29L5 25L9 9Z"></svg:path><svg:path d="M18 4L24 14.5"></svg:path><svg:path d="M30 4L24 14.5L13 29"></svg:path></svg:g>`,
})
export class IconParkHanfuChineseStyleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
