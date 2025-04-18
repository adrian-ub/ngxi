import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesPantsShortIcon],svg[icon-park-clothes-pants-short-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 36L8.00001 12H40L42 36H26.8421L24 25L21.1579 36H6Z"></svg:path><svg:path stroke="#fff" d="M24 12L27 19"></svg:path><svg:path stroke="#fff" d="M24 12L20 19.5"></svg:path><svg:path stroke="#000" d="M18 12H30"></svg:path></svg:g>`,
})
export class IconParkClothesPantsShortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
