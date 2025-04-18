import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasCopyToClipboardIcon],svg[pajamas-copy-to-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M9.45 2a2.5 2.5 0 0 0-4.9 0H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2v-1.5H3.5v-9h1V5h5V3.5h1V7H12V3a1 1 0 0 0-1-1zM7.5 9.5h1.25a.75.75 0 0 0 0-1.5h-1.5C6.56 8 6 8.56 6 9.25v1.5a.75.75 0 0 0 1.5 0zm1.25 5H7.5v-1.25a.75.75 0 0 0-1.5 0v1.5c0 .69.56 1.25 1.25 1.25h1.5a.75.75 0 0 0 0-1.5m3.75-5h-1.25a.75.75 0 0 1 0-1.5h1.5c.69 0 1.25.56 1.25 1.25v1.5a.75.75 0 0 1-1.5 0zm-1.25 5h1.25v-1.25a.75.75 0 0 1 1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-1.5a.75.75 0 0 1 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class PajamasCopyToClipboardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
