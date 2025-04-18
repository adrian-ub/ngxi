import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkClickTapTwoIcon],svg[icon-park-click-tap-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M11 44V15C11 12.7909 12.7909 11 15 11C17.2091 11 19 12.7909 19 15V35L42 40V44"></svg:path><svg:path d="M11 25.2501V25.2501C6.90264 23.65 4 19.664 4 15C4 8.92487 8.92487 4 15 4C21.0751 4 26 8.92487 26 15C26 19.664 23.0974 23.65 19 25.2501"></svg:path></svg:g>`,
})
export class IconParkClickTapTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
