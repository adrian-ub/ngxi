import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChangeIcon],svg[icon-park-change-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 31H38V5"></svg:path><svg:path d="M30 21H10V43"></svg:path><svg:path d="M44 11L38 5L32 11"></svg:path><svg:path d="M16 37L10 43L4 37"></svg:path></svg:g>`,
})
export class IconParkChangeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
