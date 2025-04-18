import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBookmarkOneIcon],svg[icon-park-bookmark-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M34 10V4H8V38L14 35"></svg:path><svg:path fill="#2F88FF" d="M14 44V10H40V44L27 37.7273L14 44Z"></svg:path></svg:g>`,
})
export class IconParkBookmarkOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
