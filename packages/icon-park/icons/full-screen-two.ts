import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFullScreenTwoIcon],svg[icon-park-full-screen-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 6H42V18"></svg:path><svg:path d="M18 6H6V18"></svg:path><svg:path d="M30 42H42V30"></svg:path><svg:path d="M18 42H6V30"></svg:path><svg:path d="M42 6L29 19"></svg:path><svg:path d="M19 29L6 42"></svg:path></svg:g>`,
})
export class IconParkFullScreenTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
