import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSunbathIcon],svg[icon-park-outline-sunbath-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path d="M11 36v4"></svg:path><svg:path stroke-linejoin="round" d="M6 36h34M8 30h16m13-19l-3 5"></svg:path><svg:path d="M35 36v4"></svg:path><svg:path stroke-linejoin="round" d="M44 10L29 36m10-17l5 9"></svg:path></svg:g>`,
})
export class IconParkOutlineSunbathIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
