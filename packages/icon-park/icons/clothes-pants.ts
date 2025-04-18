import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesPantsIcon],svg[icon-park-clothes-pants-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M33 44H42L38 4H10L6 44H15L24 19L33 44Z"></svg:path><svg:path d="M24 4V9.5"></svg:path><svg:path d="M17.0004 4C17.0004 4 17.0004 10 15.0004 12C13.0004 14 8.90039 15 8.90039 15"></svg:path><svg:path d="M31 4C31 4 31 10 33 12C35 14 39.1 15 39.1 15"></svg:path></svg:g>`,
})
export class IconParkClothesPantsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
