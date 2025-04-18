import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeFilmIcon],svg[icomoon-free-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v12h16V2zm3 11H1v-2h2zm0-4H1V7h2zm0-4H1V3h2zm9 8H4V3h8zm3 0h-2v-2h2zm0-4h-2V7h2zm0-4h-2V3h2zM6 5v6l4-3z"></svg:path>`,
})
export class IcomoonFreeFilmIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
