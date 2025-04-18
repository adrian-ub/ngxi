import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMapDrawIcon],svg[icon-park-map-draw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M17 12L4 6V36L17 42L31 36L44 42V12L31 6L17 12Z"></svg:path><svg:path stroke="#fff" d="M31 6V36"></svg:path><svg:path stroke="#fff" d="M17 12V42"></svg:path><svg:path stroke="#000" d="M10.5 9L17 12L31 6L37.5 9"></svg:path><svg:path stroke="#000" d="M10.5 39L17 42L31 36L37.5 39"></svg:path></svg:g>`,
})
export class IconParkMapDrawIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
