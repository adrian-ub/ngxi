import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsFilmIcon],svg[zondicons-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6 0v12h8V4zM2 5v2h2V5zm0 4v2h2V9zm0 4v2h2v-2zm14-8v2h2V5zm0 4v2h2V9zm0 4v2h2v-2zM8 7l5 3l-5 3z"></svg:path>`,
})
export class ZondiconsFilmIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
