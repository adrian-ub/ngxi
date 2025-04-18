import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSortFourIcon],svg[icon-park-sort-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 11.9876L23.9938 4L32 12"></svg:path><svg:path d="M32 36.0124L24.0061 44L16 36"></svg:path><svg:path d="M24 4V44"></svg:path></svg:g>`,
})
export class IconParkSortFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
