import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGameIcon],svg[icon-park-game-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M38.5121 9.5362C34.8466 6.10249 29.9188 4 24.5 4C13.1782 4 4 13.1782 4 24.5C4 35.8218 13.1782 45 24.5 45C30.1148 45 35.2024 42.7427 38.9048 39.0861L24 24L38.5121 9.5362Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M40 28C42.2091 28 44 26.2091 44 24C44 21.7909 42.2091 20 40 20C37.7909 20 36 21.7909 36 24C36 26.2091 37.7909 28 40 28Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 13V21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M13 17H21"></svg:path></svg:g>`,
})
export class IconParkGameIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
