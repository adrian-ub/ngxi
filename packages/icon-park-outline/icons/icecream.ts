import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineIcecreamIcon],svg[icon-park-outline-icecream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="M33 18H15l6 22s1 3 3 3s3-3 3-3z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36 18H12c0-8 5-14 12-14s12 6 12 14"></svg:path></svg:g>`,
})
export class IconParkOutlineIcecreamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
