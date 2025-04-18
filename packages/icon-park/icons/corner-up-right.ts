import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCornerUpRightIcon],svg[icon-park-corner-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 14L40 22L32 30"></svg:path><svg:path d="M8 38V25C8 23.3431 9.34315 22 11 22H40"></svg:path></svg:g>`,
})
export class IconParkCornerUpRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
