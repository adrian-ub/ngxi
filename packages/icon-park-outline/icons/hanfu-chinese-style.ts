import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHanfuChineseStyleIcon],svg[icon-park-outline-hanfu-chinese-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m9 9l9-5h12l9 5l4 16l-8 4v15H13V29l-8-4zm9-5l6 10.5"></svg:path><svg:path d="m30 4l-6 10.5L13 29"></svg:path></svg:g>`,
})
export class IconParkOutlineHanfuChineseStyleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
