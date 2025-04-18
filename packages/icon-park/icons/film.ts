import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFilmIcon],svg[icon-park-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M16 6V42"></svg:path><svg:path stroke-linecap="round" d="M32 6V42"></svg:path><svg:path stroke-linecap="round" d="M6 15H16"></svg:path><svg:path stroke-linecap="round" d="M32 15H42"></svg:path><svg:path stroke-linecap="round" d="M6 33H16"></svg:path><svg:path stroke-linecap="round" d="M6 24H42"></svg:path><svg:path stroke-linecap="round" d="M32 33H42"></svg:path></svg:g>`,
})
export class IconParkFilmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
