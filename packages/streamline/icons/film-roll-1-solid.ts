import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFilmRoll1SolidIcon],svg[streamline-film-roll-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 6a5.5 5.5 0 1 1 10.997.183L11 6.25v5a.75.75 0 0 0 1.5 0a.75.75 0 0 1 1.5 0a2.25 2.25 0 0 1-4.5 0V9.775A5.5 5.5 0 0 1 0 6m6.375-2.5a.875.875 0 1 1-1.75 0a.875.875 0 0 1 1.75 0m-3.18 3.383a.875.875 0 1 0 0-1.75a.875.875 0 0 0 0 1.75m5.485-.875a.875.875 0 1 1-1.75 0a.875.875 0 0 1 1.75 0M5.5 9.242a.875.875 0 1 0 0-1.75a.875.875 0 0 0 0 1.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFilmRoll1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
