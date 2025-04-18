import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBookFIcon],svg[jam-book-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18V1H3v17H0V0h11a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM6 4v2h5V4zm0 3v2h5V7zM3 18h2v2H3z"></svg:path>`,
})
export class JamBookFIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
