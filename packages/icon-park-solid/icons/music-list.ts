import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidMusicListIcon],svg[icon-park-solid-music-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 19h16m-16-9h16M8 38h32M8 28h32"></svg:path><svg:path fill="currentColor" d="m8 10l8 5l-8 5z"></svg:path></svg:g>`,
})
export class IconParkSolidMusicListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
