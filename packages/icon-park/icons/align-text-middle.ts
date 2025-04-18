import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTextMiddleIcon],svg[icon-park-align-text-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 36L24 30L30 36"></svg:path><svg:path d="M23.9999 30.9998V43.9998"></svg:path><svg:path d="M18 12L24 18L30 12"></svg:path><svg:path d="M23.9999 17.0002V4.00022"></svg:path><svg:path d="M6 24.0004H42"></svg:path></svg:g>`,
})
export class IconParkAlignTextMiddleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
