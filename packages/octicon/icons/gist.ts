import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconGistIcon],svg[octicon-gist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7.5 5L10 7.5L7.5 10l-.75-.75L8.5 7.5L6.75 5.75L7.5 5zm-3 0L2 7.5L4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z" fill="currentColor"></svg:path>`,
})
export class OcticonGistIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
