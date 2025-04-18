import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBookIcon],svg[jam-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18v2H3v-2H0V0h11a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM3 2H2v14h1zm2 0v14h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm1 2h5v2H6zm0 3h5v2H6z"></svg:path>`,
})
export class JamBookIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
