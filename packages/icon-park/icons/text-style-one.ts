import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTextStyleOneIcon],svg[icon-park-text-style-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 42L8.94118 30M32 42L27.0588 30M27.0588 30L25 25L18 8L11 25L8.94118 30M27.0588 30H8.94118"></svg:path><svg:path d="M28 10L44 10"></svg:path><svg:path d="M32 20L44 20"></svg:path><svg:path d="M36 30L44 30"></svg:path><svg:path d="M40 40H44"></svg:path></svg:g>`,
})
export class IconParkTextStyleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
