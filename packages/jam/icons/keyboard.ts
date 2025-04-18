import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamKeyboardIcon],svg[jam-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm0 4h2v2H3zm0-3h2v2H3zm0 6h2v2H3zm3 0h8v2H6zm0-3h2v2H6zm0-3h2v2H6zm3 3h2v2H9zm0-3h2v2H9zm6 6h2v2h-2zm-3-3h2v2h-2zm0-3h2v2h-2zm3 0h2v5h-2z"></svg:path>`,
})
export class JamKeyboardIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
