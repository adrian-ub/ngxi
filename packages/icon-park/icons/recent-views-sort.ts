import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRecentViewsSortIcon],svg[icon-park-recent-views-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 5V30H42V5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 37L24 43L18 37"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 30V43"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 21C28.0501 21 31.7168 19 35 15C31.7168 11 28.0501 9 24 9C19.9499 9 16.2832 11 13 15C16.2832 19 19.9499 21 24 21Z"></svg:path><svg:path fill="#fff" d="M24 18C25.6569 18 27 16.6569 27 15C27 13.3431 25.6569 12 24 12C22.3431 12 21 13.3431 21 15C21 16.6569 22.3431 18 24 18Z"></svg:path></svg:g>`,
})
export class IconParkRecentViewsSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
