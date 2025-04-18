import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamClipboardFIcon],svg[jam-clipboard-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2v2H5V2H3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zM5 6h4a2 2 0 0 0 2-2V2h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1v2a2 2 0 0 0 2 2M4 8a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2zm0 5a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamClipboardFIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
