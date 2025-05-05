import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFilmIcon],svg[picon-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V1h8v7M1 3h6v3H1m0-1h6V4H1m0 3h1V2H1m5 5h1V2H6"></svg:path>`,
})
export class PiconFilmIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
