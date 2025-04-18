import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFootballIcon],svg[icon-park-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path d="M30.0926 6.5L24.0693 10.859V15.2179L31.8135 21.3205L36.1158 19.5769L38.6972 12.6026"></svg:path><svg:path d="M18.0461 6.5L24.0693 10.859V15.2179L16.3251 21.3205L12.0228 19.5769L9.44141 12.6026"></svg:path><svg:path d="M6 22.1923L12.0233 19.5769L16.3256 21.3205L18.907 30.9102L16.3256 34.3974H8.5814"></svg:path><svg:path d="M16.3252 40.4999V34.3973L18.9066 30.9102H29.2322L31.8136 34.3973V40.4999"></svg:path><svg:path d="M39.558 34.3974H31.8138L29.2324 30.9102L31.8138 21.3205L36.1161 19.5769L42.9999 23.0641"></svg:path></svg:g>`,
})
export class IconParkFootballIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
