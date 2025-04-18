import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamClipboardIcon],svg[jam-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2v2h4V2zm6 0h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2m0 2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2H2v14h10V4zM4 8h6a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2m0 5h6a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamClipboardIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
