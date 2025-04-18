import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsFilmReelIcon],svg[flat-color-icons-film-reel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F51B5" d="M43 39V24h-4v15c0 5 4 9 9 9v-4c-2.8 0-5-2.2-5-5"></svg:path><svg:circle cx="24" cy="24" r="19" fill="#90A4AE"></svg:circle><svg:circle cx="24" cy="24" r="2" fill="#37474F"></svg:circle><svg:g fill="#253278"><svg:circle cx="24" cy="14" r="5"></svg:circle><svg:circle cx="24" cy="34" r="5"></svg:circle><svg:circle cx="34" cy="24" r="5"></svg:circle><svg:circle cx="14" cy="24" r="5"></svg:circle></svg:g>`,
})
export class FlatColorIconsFilmReelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
