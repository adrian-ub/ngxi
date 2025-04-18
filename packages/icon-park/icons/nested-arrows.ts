import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkNestedArrowsIcon],svg[icon-park-nested-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 17V4H4V30H17"></svg:path><svg:path fill="#2F88FF" d="M43 43V17H17V43H43Z"></svg:path><svg:path d="M33 30H17M33 30L28 25L33 30ZM33 30L28 35L33 30Z"></svg:path><svg:path d="M17 17V43"></svg:path></svg:g>`,
})
export class IconParkNestedArrowsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
