import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRssOutlineIcon],svg[teenyicons-rss-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M.5 13.5a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm14 1.5C14.5 6.992 8.008.5 0 .5m0 6A8.5 8.5 0 0 1 8.5 15"></svg:path>`,
})
export class TeenyiconsRssOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
