import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCornerDownRightIcon],svg[icon-park-corner-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 18L40 26L32 34"></svg:path><svg:path d="M8 10V23C8 24.6569 9.34315 26 11 26H40"></svg:path></svg:g>`,
})
export class IconParkCornerDownRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
