import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkArrowLeftUpIcon],svg[icon-park-arrow-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M11 11L36.4559 36.4558"></svg:path><svg:path d="M29 11H11V29"></svg:path></svg:g>`,
})
export class IconParkArrowLeftUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
