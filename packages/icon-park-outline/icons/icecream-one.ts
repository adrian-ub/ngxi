import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineIcecreamOneIcon],svg[icon-park-outline-icecream-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 4h14l3 28H14zm4 28v9a3 3 0 0 0 3 3v0a3 3 0 0 0 3-3v-9"></svg:path><svg:path d="M16 14a5.657 5.657 0 0 0 8 0v0a5.657 5.657 0 0 1 8 0v0m-17 8a6.04 6.04 0 0 0 8.76.716L24 22.5l.24-.216A6.04 6.04 0 0 1 33 23v0"></svg:path></svg:g>`,
})
export class IconParkOutlineIcecreamOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
