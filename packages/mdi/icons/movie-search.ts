import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMovieSearchIcon],svg[mdi-movie-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.03 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v9.05A6.49 6.49 0 0 0 16.5 10c-3.58 0-6.5 2.92-6.5 6.5c0 1.29.38 2.5 1.03 3.5m12.36 2L22 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4zM19 16.5a2.5 2.5 0 0 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path>`,
})
export class MdiMovieSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
