import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconFileCodeIcon],svg[octicon-file-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM5 6.98L3.5 8.5L5 10l-.5 1L2 8.5L4.5 6l.5.98zM7.5 6L10 8.5L7.5 11l-.5-.98L8.5 8.5L7 7l.5-1z" fill="currentColor"></svg:path>`,
})
export class OcticonFileCodeIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
