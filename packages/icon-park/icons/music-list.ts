import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMusicListIcon],svg[icon-park-music-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 19H40"></svg:path><svg:path stroke-linecap="round" d="M24 10H40"></svg:path><svg:path stroke-linecap="round" d="M8 38H40"></svg:path><svg:path stroke-linecap="round" d="M8 28H40"></svg:path><svg:path fill="#2F88FF" d="M8 10L16 15L8 20V10Z"></svg:path></svg:g>`,
})
export class IconParkMusicListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
