import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineClickTapTwoIcon],svg[icon-park-outline-click-tap-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M11 44V15a4 4 0 0 1 8 0v20l23 5v4"></svg:path><svg:path d="M11 25.25C6.903 23.65 4 19.664 4 15C4 8.925 8.925 4 15 4s11 4.925 11 11c0 4.664-2.903 8.65-7 10.25"></svg:path></svg:g>`,
})
export class IconParkOutlineClickTapTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
