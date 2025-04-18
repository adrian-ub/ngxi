import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMaximumIcon],svg[icon-park-maximum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 4V44H44"></svg:path><svg:path d="M10 38C10 38 15.3125 4 27 4C38.6875 4 44 38 44 38"></svg:path><svg:path stroke-dasharray="2 6" d="M10 4L44 4"></svg:path></svg:g>`,
})
export class IconParkMaximumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
