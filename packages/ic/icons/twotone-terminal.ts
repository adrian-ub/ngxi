import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneTerminalIcon],svg[ic-twotone-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18h16V8H4zm8-3h6v2h-6zm-5.91-4.59L7.5 9l4 4l-4 4l-1.41-1.41L8.67 13z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 15h6v2h-6z"></svg:path><svg:path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2m0 14H4V8h16z"></svg:path><svg:path fill="currentColor" d="m7.5 17l4-4l-4-4l-1.41 1.41L8.67 13l-2.58 2.59z"></svg:path>`,
})
export class IcTwotoneTerminalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
