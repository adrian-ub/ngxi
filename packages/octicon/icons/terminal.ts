import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconTerminalIcon],svg[octicon-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7 10h4v1H7v-1zm-3 1l3-3l-3-3l-.75.75L5.5 8l-2.25 2.25L4 11zm10-8v10c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1zm-1 0H1v10h12V3z" fill="currentColor"></svg:path>`,
})
export class OcticonTerminalIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
