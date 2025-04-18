import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamKeyboardFIcon],svg[jam-keyboard-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m0 6v2h2V6zm0-3v2h2V3zm0 6v2h2V9zm3 0v2h8V9zm0-3v2h2V6zm0-3v2h2V3zm3 3v2h2V6zm0-3v2h2V3zm6 6v2h2V9zm-3-3v2h2V6zm0-3v2h2V3zm3 0v5h2V3z"></svg:path>`,
})
export class JamKeyboardFIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
