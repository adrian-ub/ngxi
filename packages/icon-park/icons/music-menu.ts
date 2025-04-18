import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMusicMenuIcon],svg[icon-park-music-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M29 6V35"></svg:path><svg:path d="M15 36.04C15 33.2565 17.2565 31 20.04 31H29V36.96C29 39.7435 26.7435 42 23.96 42H20.04C17.2565 42 15 39.7435 15 36.96V36.04Z"></svg:path><svg:path stroke-linecap="round" d="M29 14.0664L41.8834 17.1215V9.01339L29 6V14.0664Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M6 8H20"></svg:path><svg:path stroke-linecap="round" d="M6 16H20"></svg:path><svg:path stroke-linecap="round" d="M6 24H16"></svg:path></svg:g>`,
})
export class IconParkMusicMenuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
