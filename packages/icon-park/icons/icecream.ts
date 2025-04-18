import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkIcecreamIcon],svg[icon-park-icecream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M33 18H15L21 40C21 40 22 43 24 43C26 43 27 40 27 40L33 18Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M36 18H12C12 10 17 4 24 4C31 4 36 10 36 18Z"></svg:path></svg:g>`,
})
export class IconParkIcecreamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
