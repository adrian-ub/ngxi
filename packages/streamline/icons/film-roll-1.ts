import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFilmRoll1Icon],svg[streamline-film-roll-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.75 6a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0m9.5.25v5a1.5 1.5 0 0 0 3 0"></svg:path><svg:path d="M5.5 3.945a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m0 5.11a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M3.195 6.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.61.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineFilmRoll1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
