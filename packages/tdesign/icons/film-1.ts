import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFilm1Icon],svg[tdesign-film-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v2h2V4zm4 0v7h8V4zm10 0v2h2V4zm2 4h-2v3h2zm0 5h-2v3h2zm0 5h-2v2h2zm-4 2v-7H8v7zM6 20v-2H4v2zm-2-4h2v-3H4zm0-5h2V8H4z"></svg:path>`,
})
export class TdesignFilm1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
