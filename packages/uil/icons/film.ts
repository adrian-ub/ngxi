import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilFilmIcon],svg[uil-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2a1 1 0 0 0-1 1v2h-2V3a1 1 0 0 0-2 0v1H8V3a1 1 0 0 0-2 0v2H4V3a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-1h8v1a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1M6 17H4v-2h2Zm0-4H4v-2h2Zm0-4H4V7h2Zm10 9H8v-5h8Zm0-7H8V6h8Zm4 6h-2v-2h2Zm0-4h-2v-2h2Zm0-4h-2V7h2Z"></svg:path>`,
})
export class UilFilmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
