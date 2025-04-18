import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggGamesIcon],svg[gg-games-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.47 11.293a1 1 0 1 0-1.415 1.414a1 1 0 0 0 1.415-1.414m.707-2.121a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414m3.535 2.121a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414m-3.535 2.121a1 1 0 1 1 1.414 1.415a1 1 0 0 1-1.414-1.415M6 13H4v-2h2V9h2v2h2v2H8v2H6z"></svg:path><svg:path fill-rule="evenodd" d="M7 5a7 7 0 0 0 0 14h10a7 7 0 1 0 0-14zm10 2H7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgGamesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
