import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBootsIcon],svg[icon-park-boots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 4H35L31 36L32.2361 36.618C33.93 37.465 35 39.1963 35 41.0902V44H10V42L23 36L19 4Z"></svg:path><svg:path d="M20 12H34"></svg:path></svg:g>`,
})
export class IconParkBootsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
