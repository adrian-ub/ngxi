import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBachelorCapOneIcon],svg[icon-park-bachelor-cap-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke-linecap="round" d="M5 16L24 6L43 16L24 26L5 16Z"></svg:path><svg:path d="M11 20V34.464C11 35.9282 12.0551 37.1872 13.4711 37.5594C15.6758 38.139 19.0564 39.2194 22.3562 41.0292C23.3775 41.5893 24.6225 41.5893 25.6438 41.0292C28.9436 39.2194 32.3242 38.139 34.5289 37.5594C35.9449 37.1872 37 35.9282 37 34.464V20"></svg:path><svg:path stroke-linecap="round" d="M43 16L43 32"></svg:path></svg:g>`,
})
export class IconParkBachelorCapOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
