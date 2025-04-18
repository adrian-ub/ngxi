import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laFilmIcon],svg[la-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v24h24V4zm2 2h2v1h2V6h12v1h2V6h2v20h-2v-1h-2v1H10v-1H8v1H6zm2 3v2h2V9zm14 0v2h2V9zM8 13v2h2v-2zm14 0v2h2v-2zM8 17v2h2v-2zm14 0v2h2v-2zM8 21v2h2v-2zm14 0v2h2v-2z"></svg:path>`,
})
export class LaFilmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
